import {combineReducers} from "redux";
import studentReducer from "./studentReducer";
import studentAppointmentsReducer from "./studentAppointmentsReducer";
import tutorAppointmentsReducer from "./tutorAppointmentsReducer";
import userReducer from "./userReducer";
import appointmentsReducer from "./appointmentsReducer";
import tutorReducer from "./tutorReducer";

const rootReducer = combineReducers({
  user: userReducer,
  tutors: tutorReducer
});

export default rootReducer;

  // student: studentReducer,
  // tutor: tutorReducer,
  //   studentAppointments: studentAppointmentsReducer,
  // tutorAppointments: tutorAppointmentsReducer
  // appointments: appointmentsReducer