import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const SignUp = () => {

  const [user, setUser] = useState({});

  const setRole = (e, role) => {
    e.preventDefault();
    setUser({...user, role})
    console.log(user);
    
  }

  const handleChange = (e) => {
    e.preventDefault();
    setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))
    console.log(('user:', user));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    
    axios.post('http://localhost:3000/users',
    {
      email: user.email,
      password: user.password,
      role: user.role
    })
    .then(resp => {
      console.log(resp);
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("token", resp.data.token);
        <Redirect to="/me" />
      }
    })
  }

 
  const roleOptions = ["student", "tutor"].map( (role, index) => {
    return(
      <div className="form-check" key={index}>
      <input className="form-check-input" value={role} type="radio" name="role" onChange={()=> console.log('onChange')} id={`user-${role}`} checked={user.role === role} />
      <label onClick={setRole.bind(this, role)} className="form-check-label" >
        {`I'm a ${role}`}
      </label>
    </div>
    )
    
  })
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">Email address</label>
          <input onChange={handleChange} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
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