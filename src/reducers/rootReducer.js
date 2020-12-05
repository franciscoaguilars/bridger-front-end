import {combineReducers} from "redux";
import studentReducer from "./studentReducer";
import tutorReducer from "./tutorReducer";
import studentAppointmentsReducer from "./studentAppointmentsReducer";
import tutorAppointmentsReducer from "./tutorAppointmentsReducer";
import userReducer from "./userReducer";
import appointmentsReducer from "./apppointmentsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer

});

export default rootReducer;

  // student: studentReducer,
  // tutor: tutorReducer,
  //   studentAppointments: studentAppointmentsReducer,
  // tutorAppointments: tutorAppointmentsReducer