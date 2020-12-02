import React, { useState } from 'react';
import Appointment from '../Appointments/Appointment';

const TutorModal = (props) => {

  const [appointments, setAppointments] = useState(props.attributes.appointments);
  console.log(appointments);
  

  const appointmentGrid = appointments.map(appointment => {
      if(appointment.student_id === null) {
        return(
          <div>
            <Appointment appointment={appointment} updateAppointments={setAppointments}/>
          </div>
        )
      }
    });


  return(
    <div>
      <div class="modal fade" id={`modal-${props.attributes.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
            <div className="tutor-card">
              <div className="tutor-modal-image">

              </div>
              <div className="tutor-card-details">
                <h5>{`${props.attributes.first_name} ${props.attributes.last_name}`}</h5>
                <small><strong>{props.attributes.occupation}</strong></small>
                <small>{`${props.attributes.city}, ${props.attributes.state}, ${props.attributes.country}`}</small>
                <small><em>{props.attributes.linked_in_link}</em></small>
              </div>
            </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="about-tab" data-toggle="tab" href={`#about-${props.attributes.id}`} role="tab" aria-controls="about" aria-selected="true">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="appointments-tab" data-toggle="tab" href={`#appointments-${props.attributes.id}`} role="tab" aria-controls="appointments" aria-selected="false">Available Appointments</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active py-4" id={`about-${props.attributes.id}`} role="tabpanel" aria-labelledby="about">{props.attributes.summary}</div>
              <div class="tab-pane fade" id={`appointments-${props.attributes.id}`} role="tabpanel" aria-labelledby="appointments">
              <div className="appointments-grid">
                {appointmentGrid}
              </div>
              </div>
            </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorModal;