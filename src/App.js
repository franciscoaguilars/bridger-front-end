import axios from 'axios';
import React, { useEffect } from 'react';
// import AuthService from './services/Services';
import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './creators/addUser';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard/Dashboard';
import Tutors from './components/Tutors/Tutors';
import CreateStudent from './components/CreateStudent';
import CreateTutor from './components/CreateTutor';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      const user = localStorage.getItem("user");
      if (user) {
        dispatch(addUser(JSON.parse(user)));
      }
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/me" component={Dashboard} />
          <Route exact path="/tutors" component={Tutors} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/students/create" component={CreateStudent} />
          <Route exact path="/tutors/create" component={CreateTutor} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;