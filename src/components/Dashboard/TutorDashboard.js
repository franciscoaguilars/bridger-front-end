import react from 'react';
import Appointment from '../Appointments/Appointment';
import { useSelector } from 'react-redux';


const TutorDashboard = (props) => {
  const currentUser = useSelector(store => store.user);
  const appointments = currentUser.appointments;
  console.log(props);
  

  const unbookedAppointments = currentUser.appointments.map(appointment => {
    if(!appointment.student_id){
      return(
        <Appointment appointment={appointment}/>
    )
    } else {
      return null
    }
    
  });

  const bookedAppointments = currentUser.appointments.map(appointment => {
    if(appointment.student_id){
      return(
        <Appointment appointment={appointment}/>
    )
    } else {
      return null
    }  
  });

  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Tutor Dashboard, ${currentUser.first_name}`}</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4>My Appointments</h4>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="about-tab" data-toggle="tab" href={`#unbooked-${props.attributes.id}`} role="tab" aria-controls="about" aria-selected="true">Available</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="appointments-tab" data-toggle="tab" href={`#booked-${props.attributes.id}`} role="tab" aria-controls="appointments" aria-selected="false">Booked</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active py-4" id={`unbooked-${props.attributes.id}`} role="tabpanel" aria-labelledby="about">
              <div className="appointments-grid">
              {unbookedAppointments}
              </div>
            </div>
            <div class="tab-pane fade py-4" id={`booked-${props.attributes.id}`}     role="tabpanel" aria-labelledby="appointments">
              <div className="appointments-grid">
                {bookedAppointments}
              </div>
            </div>
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