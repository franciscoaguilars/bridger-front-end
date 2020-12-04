import {GET_USER, RESET_USER} from "../actionTypes";
const INITIAL_STATE = {email: "", password: "", role: ""};

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USER:
      return action.user;
    case RESET_USER:
      return {email: "", password: "", role: ""};
    default:
      return state;
  };
};