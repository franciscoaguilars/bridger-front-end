import React, { useState } from 'react';
import axios from 'axios';


const SignUp = () => {

  const [user, setUser] = useState({});

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
      password: user.password
    })
    .then(resp => console.log(resp)
    )
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input onChange={handleChange} name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input onChange={handleChange} name="password" type="password" class="form-control" id="password"></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp;