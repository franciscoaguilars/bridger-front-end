import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

  const [user, setUser] = useState({});
  const history = useHistory();
  const localUrl = "http://localhost:3000"
  const herokuUrl = "https://fierce-chamber-92750.herokuapp.com"


  const setRole = (e) => {
    const userRole = e.target.value;
    setUser({...user, role: userRole})
 }

  const handleChange = (e) => {
    e.preventDefault();
    setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))
    console.log(('user:', user));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('role', user.role);
    
    
    axios.post(`${herokuUrl}/users`,
    formData )
    .then(resp => {
      console.log(resp);
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user", JSON.stringify(resp.data.user));
        localStorage.setItem("avatar",resp.data.avatar);
        user.role === "student" ? history.push("/students/create") : history.push("/tutors/create");
      }
    })
  }
 
  const roleOptions = ["student", "tutor"].map( (role, index) => {
    return(
      <div className="form-check" key={index}>
      <input onClick={setRole} className="form-check-input" value={role} type="radio" name="role"  id={`user-${role}`} />
      <label className="form-check-label" >
        {`I'm a ${role}`}
      </label>
    </div>
    )
    
  })
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input onChange={handleChange} name="email" type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Enter password"></input>
          <small id="emailHelp" className="form-text text-muted">Your password must contain: 1) Minimum 8 characters, 2) One Uppercase Letter, 3) One Number</small>
        </div>
        <div className="mb-3">
          {roleOptions}
        </div>
        
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;
