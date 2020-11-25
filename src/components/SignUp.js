import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

  const [user, setUser] = useState({});
  const history = useHistory();

  const setRole = (e, role) => {
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
      history.push("/me");
      if(resp.data.error){
        alert(resp.data.error)
      } else {
        localStorage.setItem("token", resp.data.token);
      }
    })
  }

 
  const roleOptions = ["student", "tutor"].map( (role, index) => {
    return(
      <div className="form-check" key={index}>
      <input className="form-check-input" value={role} type="radio" name="role" onChange={()=> console.log('onChange')} onClick={setRole.bind(this, role)} id={`user-${role}`} checked={role} />
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
          <label for="first_name">First Name</label>
          <input onChange={handleChange} name="firstName" type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
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