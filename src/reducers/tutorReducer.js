import {GET_TUTORS} from "../actionTypes";

const INITIAL_STATE = [];

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_TUTORS:
      return action.tutors;
    default:
      return state;
  };
};

