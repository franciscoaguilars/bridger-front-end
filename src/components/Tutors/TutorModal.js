import React, { useState } from 'react';
import Appointment from '../Appointments/Appointment';

const TutorModal = (props) => {

  const [appointments, setAppointments] = useState(props.attributes.appointments);
  const localUrl = "http://localhost:3000"
  const herokuUrl = "https://fierce-chamber-92750.herokuapp.com"

  const appointmentGrid = appointments.map(appointment => {
      if(appointment.student_id === null) {
        return(
          <div>
            <Appointment key={appointment.id} appointment={appointment} updateAppointments={setAppointments}/>
          </div>
        )
      }
    });


  return(
    <div>
      <div className="modal fade" id={`modal-${props.attributes.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <div className="tutor-card">
              <div>
              {/* make sure the image source below is set to the correct environment */}
                <img className="tutor-modal-image" src={`${herokuUrl}/${props.attributes.avatar}`}/>
              </div>
              <div className="tutor-card-details">
                <h5>{`${props.attributes.first_name} ${props.attributes.last_name}`}</h5>
                <small><strong>{props.attributes.occupation}</strong></small>
                <small>{`${props.attributes.city}, ${props.attributes.state}, ${props.attributes.country}`}</small>
                <small><em>{props.attributes.linked_in_link}</em></small>
              </div>
            </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="about-tab" data-toggle="tab" href={`#about-${props.attributes.id}`} role="tab" aria-controls="about" aria-selected="true">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="appointments-tab" data-toggle="tab" href={`#appointments-${props.attributes.id}`} role="tab" aria-controls="appointments" aria-selected="false">Available Appointments</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active py-4" id={`about-${props.attributes.id}`} role="tabpanel" aria-labelledby="about">{props.attributes.summary}</div>
              <div className="tab-pane fade" id={`appointments-${props.attributes.id}`} role="tabpanel" aria-labelledby="appointments">
              <div className="appointments-grid">
                {appointmentGrid}
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
    </div>
  )
}

export default TutorModal;