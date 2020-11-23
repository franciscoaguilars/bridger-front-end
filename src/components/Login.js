import axios from 'axios';
import react, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    axios.post('http://localhost:3000/login',
    {
      email: email,
      password: password
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



  return (
    <div className="container ">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange ={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange ={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
      
    </div>
  )
}

export default Login;