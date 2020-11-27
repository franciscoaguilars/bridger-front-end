import react from 'react';
import getCurrentUser from '../../services/services';

const Appointment = (props) => {

  const currentUser = getCurrentUser();
  console.log(props.appointment);

  const TimeslotButton = () => {
    if (currentUser.role === "student") {
      return(
        <button className="btn btn-primary btn-block">Book Timeslot</button>
      )
    } else {
      return (
        null
      )
    }
  }
  
  return(
    <div className="appointment-card">
      <p>{props.appointment.date}</p>
      <TimeslotButton />
    </div>
  )
}

export default Appointment;