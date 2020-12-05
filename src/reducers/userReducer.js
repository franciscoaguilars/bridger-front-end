import {GET_USER, RESET_USER} from "../actionTypes";

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
    default:
      return state;
  };
};

