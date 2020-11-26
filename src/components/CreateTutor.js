import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import getCurrentUser from '../services/services';

const CreateTutor = () => {

  const [tutor, setTutor] = useState({});
  const history = useHistory();
  const currentUser = getCurrentUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(currentUser);
    
    
    axios.post('http://localhost:3000/api/v1/tutors.json',
    {
      first_name: tutor.firstName,
      last_name: tutor.lastName,
      city: tutor.city,
      state: tutor.state,
      country: tutor.country,
      phone: tutor.phone,
      occupation: tutor.occupation,
      linked_in_link: tutor.linkedin,
      user_id: currentUser.id
    })
    .then(resp => {
      console.log(resp);
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("token", resp.data.token);
        history.push("/me");
      }
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setTutor(Object.assign({}, tutor, {[e.target.name]: e.target.value}));
    console.log(('tutor:', tutor));
  }

  return(
    <div className="container">
      <h2 className="mb-4">Create Your Tutor Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input  onChange={handleChange} name="firstName" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter your first name"></input>
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input onChange={handleChange} name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter your last name"></input>
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input onChange={handleChange} name="city" type="text" className="form-control" id="city" placeholder="Enter your city"></input>
        </div>
        <div className="form-group">
          <label for="state">State</label>
          <input onChange={handleChange} name="state" type="text" className="form-control" id="state" placeholder="Enter your state"></input>
        </div>
        <div className="form-group">
          <label for="country">Country</label>
          <input onChange={handleChange} name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input onChange={handleChange} name="phone" type="tel" className="form-control" id="phone" placeholder="Where can we contact you?"></input>
        </div>
        <div className="form-group">
          <label for="occupation">Occupation</label>
          <input onChange={handleChange} name="occupation" type="text" className="form-control" id="occupation" placeholder="Occupation"></input>
        </div>
        <div className="form-group">
          <label for="linkedin">LinkedIn</label>
          <input onChange={handleChange} name="linkedin" type="url" className="form-control" id="linkedin" placeholder="LinkedIn profile"></input>
        </div>
 
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateTutor;