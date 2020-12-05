import {GET_USER, RESET_USER, CANCEL_APPOINTMENT, BOOK_APPOINTMENT} from "../actionTypes";

let user = JSON.parse(localStorage.getItem('user'));
const INITIAL_STATE = user ? { loggedIn: true, user } : { loggedIn: false, user: {}};
console.log(user);


export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USER:
      return {
        loggedIn: true,
        user: action.user
      };
    case RESET_USER:
      return {email: "", password: "", role: ""};
    case CANCEL_APPOINTMENT:
      console.log(state.user);
      return {...state, user: {...state.user, student: {...state.user.student, appointments: state.user.student.appointments.filter(appt => appt.id !== action.id)}}};
    case BOOK_APPOINTMENT:
      return {...state, user: {...state.user, student: {...state.user.student, appointments: state.user.student.appointments.filter(appt => appt.id !== action.id)}}};
    default:
      return state;
  };
};
