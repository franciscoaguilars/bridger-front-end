import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateAppointment } from '../../creators/updateAppointmentCreator';

const EditAppointment = ({appointment}) => {

  const [ updatedAppointment, setUpdatedAppointment ] = useState({});
  const history = useHistory();
  const currentUser = useSelector(store => store.user);
  const dispatch = useDispatch();
  const appointment_id = appointment.id;

  var today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedAppointment);
  dispatch(updateAppointment(updatedAppointment, appointment_id));
    history.push("/me");
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log('previous appt: ', appointment);
    
    setUpdatedAppointment(Object.assign({}, updatedAppointment, {[e.target.name]: e.target.value}, {id: appointment.id, tutor_id: appointment.tutor_id, student_id: appointment.student_id}))
    console.log(('appointment:', updatedAppointment));
  }

  if(currentUser !== {}){
    return(
      <div>
        <h5 className="mb-4">Edit Appointment</h5>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="form-group">
            <label className="mr-1" htmlFor="date">Date:</label>
            <input onChange={handleChange} type="date" id="date" name="date" min={today} />
          </div>
          <div className="form-group">
            <label className="mr-1" htmlFor="time">Select a time:</label>
            <input onChange={handleChange} type="time" id="time" name="time" />
          </div>
          <input onChange={handleChange} type="hidden" id="tutor" name="tutor_id" value={currentUser.id}></input>
          <button className="btn btn-primary">Post</button>
        </form>
    </div>
    ) 
  }
}

export default EditAppointment;