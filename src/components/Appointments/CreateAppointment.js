import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../creators/newAppointmentCreator';

const CreateAppointment = () => {

  const currentUser = useSelector(store => store.user);
  const [ appointment, setAppointment ] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  var today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appointment);
    dispatch(createAppointment(appointment));
    history.push("/me");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setAppointment(Object.assign({}, appointment, {[e.target.name]: e.target.value}, {tutor_id: currentUser.id}))
    console.log(('appointment:', appointment));
  }

  if(currentUser !== {}){
    return(
      <div className="container">
        <h2 className="mb-4">Post an available appointment</h2>
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

export default CreateAppointment;