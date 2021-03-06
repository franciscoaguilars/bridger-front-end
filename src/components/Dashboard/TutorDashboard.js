import React from 'react';
import Appointment from '../Appointments/Appointment';
import { useSelector } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const TutorDashboard = () => {

  const currentUser = useSelector(store => store.user);
  const appointments = currentUser.appointments || [];
  console.log(appointments);
  

  const unbookedAppointments = appointments.map(appointment => {
    if(!appointment.student_id){
      return(
        <Appointment key={appointment.id} appointment={appointment}/>
    )
    } else {
      return null
    }
  });

  const bookedAppointments = appointments.map(appointment => {
    if(appointment.student_id){
      return(
        <Appointment key={appointment.id} appointment={appointment}/>
    )
    } else {
      return null
    }  
  });

  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Tutor Dashboard, ${currentUser.first_name}`}</h2>
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="tutor-dashboard-header mb-2">
            <h4 className="mr-2">My Appointments</h4>
            <Link to="/appointments/create"><BsPlusCircle className="mb-2" /></Link>
          </div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="about-tab" data-toggle="tab" href={`#unbooked-${currentUser.id}`} role="tab" aria-controls="about" aria-selected="true">Available</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="appointments-tab" data-toggle="tab" href={`#booked-${currentUser.id}`} role="tab" aria-controls="appointments" aria-selected="false">Booked</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active py-4" id={`unbooked-${currentUser.id}`} role="tabpanel" aria-labelledby="about">
              <div className="tutor-appointments">
              {unbookedAppointments}
              </div>
            </div>
            <div className="tab-pane fade py-4" id={`booked-${currentUser.id}`}     role="tabpanel" aria-labelledby="appointments">
              <div className="tutor-appointments">
                {bookedAppointments}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorDashboard;