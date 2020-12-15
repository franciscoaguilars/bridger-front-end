import {GET_PARTNERS} from "../actionTypes";

const INITIAL_STATE = [];

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_PARTNERS:
      return action.partners;
    default:
      return state;
  };
};
