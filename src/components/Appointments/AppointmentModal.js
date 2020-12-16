import react from 'react';
import { useSelector } from 'react-redux';
import EditAppointment from './EditAppointment';

const AppointmentModal = ({appointment}) => {
  console.log(appointment);
  const currentUser = useSelector(store => store.user);
  console.log(currentUser);
  
  
  return(
    <div className="modal fade" id={`appointment-modal-${appointment.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">{`Appointment on ${appointment.date}`}</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="appointment-details">
                  <h5>Appointment Details</h5>
                  <p>Time: {appointment.time}</p>
                  <p>Tutor: {currentUser.first_name} {currentUser.last_name}</p>
                </div>
                
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="appointment-edit">
                  <EditAppointment appointment={appointment} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
</div>
  )
}

export default AppointmentModal;
