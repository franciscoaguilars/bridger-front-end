import react from 'react';
// import getCurrentUser from '../../services/services';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Appointment = (props) => {

  const currentUser = useSelector(store => store.user);
  // const currentUser = getCurrentUser();
  const studentName = props.appointment.student_id;
  const tutorName = props.appointment.tutor_id;
  console.log(props.appointment);

  const handleCancel = () => {
    const newList = props.appointmentList.filter(appointment => appointment.id !== props.appointment.id);
    props.updateAppointments(newList);
    const url = 'http://localhost:3000/api/v1/appointments/'
    axios.delete(`${url}${props.appointment.id}`)
  };

  const AppointmentButtons = () => {
    if (currentUser.role === "student" && props.appointment.student_id === null) {
      return(
        <button className="btn btn-primary btn-block">Book Timeslot</button>
      )
    } else if(currentUser.role === "tutor" && currentUser.tutor.id === props.appointment.tutor_id) {
      return (
        <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
      )
    } else if(currentUser.role === "student" && props.appointment.student_id) {
      return (
        <button className="btn btn-primary btn-block" onClick={handleCancel}>Cancel</button>
      )
    } else {
      return null;
    }
  }

  const ShowStudent = () => {
    if(currentUser.role === "tutor" && props.appointment.student_id){
      return <small>{`with ${studentName}`}</small>
    } else if(currentUser.role === "student" && props.appointment.student_id) {
      return <small>{`with ${tutorName}`}</small>
    } else {
      return null
    }
  }

  
  
  return(
    <div className="appointment-card">
      <p>{props.appointment.date}</p>
      <ShowStudent />
      <AppointmentButtons />
    </div>
  )
}

export default Appointment;