import React, { useEffect, useState } from 'react';
import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Volunteers from './components/Volunteers';
import Dashboard from './components/Dashboard/Dashboard';
import Tutors from './components/Tutors/Tutors';
import CreateStudent from './components/CreateStudent';
import CreateTutor from './components/CreateTutor';
import CreateAppointment from './components/Appointments/CreateAppointment';
import CreatePartner from './components/Partners/CreatePartner';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer';
import FlashMessage from "./components/FlashMessage";
import {resetLoginError, resetGetTutorsError, resetCreateTutorError, resetCreateStudentError, resetCreateAppointmentError, resetCancelAppointmentError, resetBookAppointmentError} from "./creators/resetErrorsCreator"
import useViewport from "./hooks/useViewport";

function App() {

  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user);
  //STORE FOR ERRORS
  const loginError = useSelector(store => store.errors.loginError);
  const createTutorError = useSelector(store => store.errors.createTutorError);
  const createStudentError = useSelector(store => store.errors.createStudentError);
  const createAppointmentError = useSelector(store => store.errors.createAppointmentError);
  const getTutorsError = useSelector(store => store.errors.getTutorsError);
  const cancelAppointmentError = useSelector(store => store.errors.cancelAppointmentError);
  const bookAppointmentError = useSelector(store => store.errors.bookAppointmentError);
  //STATE FOR FLASH MESSAGES
  const [loginErrorFlashMessage, setLoginErrorFlashMessage] = useState(false);
  const [createTutorErrorFlashMessage, setCreateTutorErrorFlashMessage] = useState(false);
  const [createStudentErrorFlashMessage, setCreateStudentErrorFlashMessage] = useState(false);
  const [createAppointmentErrorFlashMessage, setCreateAppointmentErrorFlashMessage] = useState(false);
  const [getTutorsErrorFlashMessage, setGetTutorsErrorFlashMessage] = useState(false);
  const [cancelAppointmentErrorFlashMessage, setCancelAppointmentErrorFlashMessage] = useState(false);
  const [bookAppointmentErrorFlashMessage, setBookAppointmentErrorFlashMessage] = useState(false);
  //CUSTOM HOOK
  const {viewportHeight} = useViewport();
  let topPositioning = viewportHeight - 80;
  const divStyle = {
    position: 'absolute',
    top: topPositioning,
    right: 0,
    zIndex: 2
  };

  useEffect(() => {
    const getUser = async () => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    };
    getUser();
  }, [currentUser]);

  //LISTENS FOR ANY CHANGES IN ERRORS IN STATE AND WILL TRIGGER FLASH MESSAGES ACCORDINGLY
  useEffect(() => {

    const displayFlashMessage = () => {

        if (loginError) {
          setLoginErrorFlashMessage(true);
          dispatch(resetLoginError());
        };
        if (createTutorError) {
          setCreateTutorErrorFlashMessage(true);
          dispatch(resetCreateTutorError());
        };
        if (createStudentError) {
          setCreateStudentErrorFlashMessage(true);
          dispatch(resetCreateStudentError());
        };
        if (createAppointmentError) {
          setCreateAppointmentErrorFlashMessage(true);
          dispatch(resetCreateAppointmentError());
        };
        if (getTutorsError) {
          setGetTutorsErrorFlashMessage(true);
          dispatch(resetGetTutorsError());
        };
        if (cancelAppointmentError) {
          setCancelAppointmentErrorFlashMessage(true);
          dispatch(resetCancelAppointmentError());
        };
        if (bookAppointmentError) {
          setBookAppointmentErrorFlashMessage(true);
          dispatch(resetBookAppointmentError());
        };
    };
    displayFlashMessage();
  }, [loginError, createTutorError, createStudentError, createAppointmentError, getTutorsError, cancelAppointmentError, bookAppointmentError, dispatch]);

  return (
    <div className="App">
      <div style={divStyle}>
        {loginErrorFlashMessage && (<FlashMessage setState={setLoginErrorFlashMessage} message="Invalid Username or Password."/> )}
        {createStudentErrorFlashMessage && (<FlashMessage setState={setCreateStudentErrorFlashMessage} message="There was an error trying to sign up."/> )}
        {createTutorErrorFlashMessage && (<FlashMessage setState={setCreateTutorErrorFlashMessage} message="There was an error trying to sign up."/> )}
        {bookAppointmentErrorFlashMessage && (<FlashMessage setState={setBookAppointmentErrorFlashMessage} message="Looks like there was an error attempting to book this appointment."/> )}
        {cancelAppointmentErrorFlashMessage && (<FlashMessage setState={setCancelAppointmentErrorFlashMessage} message="Looks like there was an error attempting to cancel this appointment."/> )}
        {getTutorsErrorFlashMessage && (<FlashMessage setState={setGetTutorsErrorFlashMessage} message="Unfortunately the tutors page is currently unavailable."/> )}
        {createAppointmentErrorFlashMessage && (<FlashMessage setState={setCreateAppointmentErrorFlashMessage} message="Looks like there was an error attempting to create this appointment."/> )}
      </div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={OurTeam} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/me" component={Dashboard} />
          <Route exact path="/tutors" component={Tutors} />
          <Route exact path="/volunteers" component={Volunteers} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/students/create" component={CreateStudent} />
          <Route exact path="/tutors/create" component={CreateTutor} />
          <Route exact path="/appointments/create" component={CreateAppointment} />
          <Route exact path="/partners/create" component={CreatePartner} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;