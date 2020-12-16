import {
  CREATE_STUDENT,
  LOGIN_USER,
  RESET_USER,
  BOOK_APPOINTMENT,
  CANCEL_APPOINTMENT,
  CREATE_APPOINTMENT,
  UPDATE_APPOINTMENT,
  CREATE_TUTOR
} from "../actionTypes";

let user;
try {
  user = JSON.parse(localStorage.getItem('user'));
  console.log("user, ", user);
} catch(e) {
  console.log("HIT error; ", e);
};
const INITIAL_STATE = user ? user : {};

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_STUDENT:
      console.log(action.user);
      return action.user
    case CREATE_TUTOR:
      console.log(action.user);
      return action.user
    // case CREATE_PARTNER:
    //   console.log(action.user);
    //   return action.user
    case LOGIN_USER:
      return action.user
    case RESET_USER:
      return {};
    case BOOK_APPOINTMENT:
      console.log(action.id);
      console.log(state);
      return {...state, appointments: state.appointments.filter(appt => appt.id !== action.id)};
    case CANCEL_APPOINTMENT:
      console.log(state);
      console.log(action.id);
      return {...state, appointments: state.appointments.filter(appt => appt.id !== action.id)};
    case CREATE_APPOINTMENT:
      console.log(action);
      console.log(state);
      return {...state, appointments: [...state.appointments, action.newAppointment]};
    case UPDATE_APPOINTMENT:
      console.log(state);
      console.log(action.id);
      const filteredAppts = state.appointments.filter(appt => appt.id !== action.id);
      console.log(filteredAppts);
      return {...state, appointments: [...filteredAppts, action.appointment]};
    default:
      return state;
  };
};

