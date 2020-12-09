import {combineReducers} from "redux";
import userReducer from "./userReducer";
import tutorReducer from "./tutorReducer";
import errorsReducer from "./errorsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  tutors: tutorReducer,
  errors: errorsReducer
});

export default rootReducer;

