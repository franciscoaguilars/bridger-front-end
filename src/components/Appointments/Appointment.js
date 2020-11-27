import react from 'react';
import getCurrentUser from '../../services/services';

const Appointment = (props) => {

  const currentUser = getCurrentUser();
  console.log(props.appointment);

  const AppointmentButtons = () => {
    if (currentUser.role === "student" && props.appointment.student_id === null) {
      return(
        <button className="btn btn-primary btn-block">Book Timeslot</button>
      )
    } else if(currentUser.role === "tutor" && currentUser.tutor.id === props.appointment.tutor_id) {
      return (
        <button className="btn btn-primary btn-block">Cancel</button>
      )
    } else {
      return null
    }
  }

  const studentName = props.appointment.student_id;
  
  return(
    <div className="appointment-card">
      <p>{props.appointment.date}</p>
      <small>{`with ${studentName}`}</small>
      <AppointmentButtons />
    </div>
  )
}

export default Appointment;