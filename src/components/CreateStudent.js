import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateStudent = () => {

  const [student, setStudent] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    
    axios.post('http://localhost:3000/students',
    {
      first_name: student.firstName,
      last_name: student.lastName,
      city: student.city,
      state: student.state,
      country: student.country,
      school: student.school
    })
    .then(resp => {
      console.log(resp);
      history.push("/me");
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("token", resp.data.token);
      }
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setStudent(Object.assign({}, student, {[e.target.name]: e.target.value}))
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
          <input onChange={handleChange} name="last_name" type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
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
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateStudent;