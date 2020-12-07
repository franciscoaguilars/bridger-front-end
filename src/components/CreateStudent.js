import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createStudent } from '../creators/newStudentCreator';


const CreateStudent = () => {
  

  const [student, setStudent] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(student);
    dispatch(createStudent(student));
    history.push("/me");
    // axios.post('https://fierce-chamber-92750.herokuapp.com/api/v1/students', student )
    // .then(resp => {
    //   console.log(resp);
    //   if(resp.data.error){
    //     alert(resp.data.error)
    //   } else {
    //     localStorage.setItem("user", JSON.stringify(resp.data.user));
    //     history.push("/me");
    //   }
    // })
  }

  const handleChange = (e) => {
    setStudent(Object.assign({}, student, {[e.target.name]: e.target.value, user_id: currentUser.id}));
    console.log(('student:', student));
  }

  return(
    <div className="container">
      <h2 className="mb-4">Create Your Student Profile</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="first_name" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="last_name" type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input onChange={handleChange} name="city" type="text" className="form-control" id="city" placeholder="City"></input>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input onChange={handleChange} name="state" type="text" className="form-control" id="state" placeholder="State"></input>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input onChange={handleChange} name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input onChange={handleChange} name="school" type="text" className="form-control" id="school" placeholder="School"></input>
        </div>
        <input onChange={handleChange} type="hidden" id="user" name="user" value={currentUser.id}></input>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateStudent;