import axios from 'axios';
import React, { useEffect } from 'react';
import Services from './services/services';
import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  const currentUser = useSelector(store => store.user);

  useEffect(() => {
    const getUser = async () => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    };
    getUser();
  }, [currentUser]);

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