import React, { useEffect } from 'react';
// import getCurrentUser from '../../services/services';
import { useSelector, useDispatch } from 'react-redux';
import { cancelAppointment } from '../../creators/cancelAppointmentCreator';
import { bookAppointment } from '../../creators/bookAppointmentCreator';
import AppointmentModal from './AppointmentModal';  

const Appointment = ({appointment}) => {

  const currentUser = useSelector(store => store.user);
  // const currentUser = getCurrentUser();
  const studentName = appointment.student_id;
  const tutorName = appointment.tutor_id;
  const dispatch = useDispatch();
  // console.log(appointment);

  const handleCancel = () => {
    dispatch(cancelAppointment(appointment.id));
  };

  const handleBookAppointment = () => {
    dispatch(bookAppointment(appointment.id, currentUser.id)); // passing student ID
  }

  const AppointmentButtons = () => {
    if (currentUser.role === "student" && appointment.student_id === null) {
      return(
        <button onClick={handleBookAppointment} className="btn btn-primary btn-block">Book Timeslot</button>
      )
    } else if(currentUser.role === "tutor" && currentUser.id === appointment.tutor_id) {
      return (
        <div>
          <a className="btn btn-primary" type="button" data-toggle="modal" data-target={`#appointment-modal-${appointment.id}`}>
          See Details >>
        </a>
          <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
        </div>
        
      )
    } else if(currentUser.role === "student" && appointment.student_id) {
      return (
        <div>
           <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
        </div>  
       
      )
    } else {
      return null;
    }
  }

  const ShowStudent = () => {
    if(currentUser.role === "tutor" && appointment.student_id){
      return <small>{`with ${studentName}`}</small>
    } else if(currentUser.role === "student" && appointment.student_id) {
      return <small>{`with ${tutorName}`}</small>
    } else {
      return null
    }
  }
  // --- DATE FORMATING --- 
  const [year, month, day] = appointment.date.split('-')
  const dateOptions = {  year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(year, month , day );

  const dateParsed = date.toLocaleDateString("en-US", dateOptions)
  // --- DATE FORMATING --- 

  // --- TIME --- 
  const msToTime = (duration)  => {
    let milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return hours + ":" + minutes;
  }


  const dateToMs = new Date(appointment.time);
  const dateFormatted = msToTime(dateToMs);

  // --- TIME ---
  
  return(
    <div className="appointment-card">
      <div className="appointment-card-details">
        <div className='m-2'>{dateParsed}</div>
        <div>{dateFormatted}</div>
      </div>
      
      <ShowStudent />
      <AppointmentButtons />
      <AppointmentModal appointment={appointment} />
    </div>
  )
}

export default Appointment;