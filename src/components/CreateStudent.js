import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import getCurrentUser from '../services/services';

const CreateStudent = () => {

  console.log(localStorage.token);
  

  const [student, setStudent] = useState({});
  const history = useHistory();
  const currentUser = getCurrentUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(student);
    
    
    axios.post('http://localhost:3000/api/v1/students',
    {
      first_name: student.firstName,
      last_name: student.lastName,
      city: student.city,
      state: student.state,
      country: student.country,
      school: student.school,
      user_id: currentUser.id
    })
    .then(resp => {
      console.log(resp);
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("user", JSON.stringify(resp.data.user));
        history.push("/me");
      }
    })
  }

  const handleChange = (e) => {
    setStudent(Object.assign({}, student, {[e.target.name]: e.target.value}));
    // setStudent({...student, user: currentUser})
    console.log(('student:', student));
  }

  return(
    <div className="container">
      <h2 className="mb-4">Create Your Student Profile</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input onChange={handleChange} name="firstName" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input onChange={handleChange} name="lastName" type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input onChange={handleChange} name="city" type="text" className="form-control" id="city" placeholder="City"></input>
        </div>
        <div className="form-group">
          <label for="state">State</label>
          <input onChange={handleChange} name="state" type="text" className="form-control" id="state" placeholder="State"></input>
        </div>
        <div className="form-group">
          <label for="country">Country</label>
          <input onChange={handleChange} name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label for="school">School</label>
          <input onChange={handleChange} name="school" type="text" className="form-control" id="school" placeholder="School"></input>
        </div>
        <input onChange={handleChange} type="hidden" id="user" name="user" value={currentUser}></input>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateStudent;