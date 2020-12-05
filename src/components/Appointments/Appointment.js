import React, { useEffect } from 'react';
// import getCurrentUser from '../../services/services';
import { useSelector, useDispatch } from 'react-redux';
import { cancelAppointment } from '../../creators/cancelAppointmentCreator';
import { bookAppointment } from '../../creators/bookAppointmentCreator';

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
        <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
      )
    } else if(currentUser.role === "student" && appointment.student_id) {
      return (
        <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
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
      <p>{appointment.date}</p>
      <ShowStudent />
      <AppointmentButtons />
    </div>
  )
}

export default Appointment;