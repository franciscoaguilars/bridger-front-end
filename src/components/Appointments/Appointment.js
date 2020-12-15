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

  
  
  return(
    <div className="appointment-card">
      <div className="appointment-card-details">
        <div>{appointment.date}</div>
        <div>{appointment.time}</div>
      </div>
      
      <ShowStudent />
      <AppointmentButtons />
      <AppointmentModal appointment={appointment} />
    </div>
  )
}

export default Appointment;