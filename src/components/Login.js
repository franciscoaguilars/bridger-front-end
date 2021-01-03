import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../creators/userCreator';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.user)


  useEffect(() => {

    const displayFlashMessage = () => {
        if (currentUser.first_name) {
          console.log("currentUser changed to True");
          history.push("/me");
        };
    };
    displayFlashMessage();
  }, [currentUser, dispatch]);


  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    dispatch(getUser(email, password))

  }



  return (
    <div className="form-page">
      <div className="container ">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange ={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange ={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </div>
    </div>
    
  )
}

export default Login;
