import React from 'react';
import Appointment from '../Appointments/Appointment';
import { useSelector } from 'react-redux';

const StudentDashboard = () => {

  const currentUser = useSelector(store => store.user);
  const appointments = currentUser.appointments || [];

  const appointmentGrid = appointments.map(appointment => {
    return(
      <div>
        <Appointment key={appointment.id} appointmentList={appointments} appointment={appointment}  />
      </div>
    )
  });

  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Student Dashboard, ${currentUser.first_name}`}</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4 className="mb-4">My Appointments</h4>
          <div className="appointments-grid mb-4">
                {appointmentGrid}
              </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>My Progress</h4>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard;