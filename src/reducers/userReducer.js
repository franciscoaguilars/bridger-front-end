import {GET_USER, RESET_USER, BOOK_APPOINTMENT, CANCEL_APPOINTMENT, CREATE_APPOINTMENT, UPDATE_APPOINTMENT} from "../actionTypes";

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
    case GET_USER:
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
    case UPDATE_APPOINTMENT:
      return {};
    case CREATE_APPOINTMENT:
      return {};
    default:
      return state;
  };
};

