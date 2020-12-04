import {GET_USER, ADD_USER, RESET_USER, CANCEL_APPOINTMENT} from "../actionTypes";
const INITIAL_STATE = {email: "", password: "", role: ""};

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USER:
      return action.user;
    case ADD_USER:
      return action.user;
    case RESET_USER:
      return {email: "", password: "", role: ""};
    case CANCEL_APPOINTMENT:
      console.log(action.appointments);
      console.log(state.student.appointments);
      return {...state, appointments: action.appointments};
    default:
      return state;
  };
};