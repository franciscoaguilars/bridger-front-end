import react from 'react';

const Appointment = (props) => {
  console.log(props.appointment);
  
  return(
    <div className="appointment-card">
      <p>{props.appointment.date}</p>
      <button className="btn btn-primary btn-block">Book Timeslot</button>
    </div>
  )
}

export default Appointment;