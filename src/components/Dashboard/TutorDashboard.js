import react from 'react';
import Appointment from '../Appointments/Appointment';


const TutorDashboard = (props) => {
  console.log(props);
  

  const appointmentGrid = props.attributes.tutor.appointments.map(appointment => {
    return(
      <div>
        <Appointment appointment={appointment}/>
      </div>
    )
  });

  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Tutor Dashboard, ${props.attributes.tutor.first_name}`}</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4>My Appointments</h4>
          <div className="appointments-grid mb-4">
            {appointmentGrid}
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>My Students</h4>
        </div>
      </div>
    </div>
  )
}

export default TutorDashboard;