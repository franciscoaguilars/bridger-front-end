import {BOOK_APPOINTMENT, CANCEL_APPOINTMENT, CREATE_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT} from "../actionTypes";

// let { student: { appointments }} = JSON.parse(localStorage.getItem('user'));
// const INITIAL_STATE = appointments ? appointments : {};
// console.log(appointments);
let user;
try {
  user = JSON.parse(localStorage.getItem('user'));
  console.log("user, ", user);
} catch(e) {
  console.log("HIT error; ", e);
};
const INITIAL_STATE = user ? user.appointments : {};



export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case BOOK_APPOINTMENT:
      return state.filter(appt => appt.id !== action.id);
    case CANCEL_APPOINTMENT:
      console.log(state.user);
      return state.filter(appt => appt.id !== action.id);
    case DELETE_APPOINTMENT:
      console.log(state.user);
      return state.filter(appt => appt.id !== action.id);;
    case UPDATE_APPOINTMENT:
      return {};
    case CREATE_APPOINTMENT:
      return {};
    default:
      return state;
  };
};

