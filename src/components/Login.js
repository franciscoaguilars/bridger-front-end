import axios from 'axios';
import react, { useState } from 'react';

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
    .then(resp => console.log(resp)
    )
  }



  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center">
      <div className="col-10 col-md-12 col-lg-6">
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
    </div>
    </div>
  )
}

export default Login;