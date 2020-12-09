import {
  LOGIN_ERROR, 
  RESET_LOGIN_ERROR, 
  CREATE_TUTOR_ERROR, 
  RESET_CREATE_TUTOR_ERROR, 
  CREATE_STUDENT_ERROR, 
  RESET_CREATE_STUDENT_ERROR,
  CREATE_APPOINTMENT_ERROR,
  RESET_CREATE_APPOINTMENT_ERROR,
  GET_TUTORS_ERROR,
  RESET_GET_TUTORS_ERROR,
  CANCEL_APPOINTMENT_ERROR,
  RESET_CANCEL_APPOINTMENT_ERROR,
  BOOK_APPOINTMENT_ERROR,
  RESET_BOOK_APPOINTMENT_ERROR
} from "../actionTypes";

const INITIAL_STATE = {
  loginError: false, 
  createUserError: false, 
  createTutorError: false, 
  createStudentError: false,
  createAppointmentError: false,
  getTutorsError: false,
  cancelAppointmentError: false,
  bookAppointmentError: false,
};

export default function resultsReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN_ERROR:
      return {...state, loginError: true};
    case RESET_LOGIN_ERROR:
      return {...state, loginError: false};
    case CREATE_TUTOR_ERROR:
      return {...state, createTutorError: true};
    case RESET_CREATE_TUTOR_ERROR:
      return {...state, createTutorError: false};
    case CREATE_STUDENT_ERROR:
      return {...state, createStudentError: true};
    case RESET_CREATE_STUDENT_ERROR:
      return {...state, createStudentError: false};
    case CREATE_APPOINTMENT_ERROR:
      return {...state, createAppointmentError: true};
    case RESET_CREATE_APPOINTMENT_ERROR:
      return {...state, createAppointmentError: false};
    case GET_TUTORS_ERROR:
      return {...state, getTutorsError: true};
    case RESET_GET_TUTORS_ERROR:
      return {...state, getTutorsError: false};
    case CANCEL_APPOINTMENT_ERROR:
      return {...state, cancelAppointmentError: true};
    case RESET_CANCEL_APPOINTMENT_ERROR:
      return {...state, cancelAppointmentError: false};
    case BOOK_APPOINTMENT_ERROR:
      return {...state, bookAppointmentError: true};
    case RESET_BOOK_APPOINTMENT_ERROR:
      return {...state, bookAppointmentError: false};
    default:
      return state;
  };
};
