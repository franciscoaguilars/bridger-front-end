import {combineReducers} from "redux";
import userReducer from "./userReducer";
import partnerReducer from './partnerReducer';
import tutorReducer from "./tutorReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  tutors: tutorReducer,
  partners: partnerReducer,
  errors: errorsReducer
});

export default rootReducer;

