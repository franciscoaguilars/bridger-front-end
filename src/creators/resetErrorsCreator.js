import {
  RESET_LOGIN_ERROR, 
  RESET_CREATE_TUTOR_ERROR, 
  RESET_CREATE_STUDENT_ERROR, 
  RESET_CREATE_APPOINTMENT_ERROR,
  RESET_GET_TUTORS_ERROR,
  RESET_CANCEL_APPOINTMENT_ERROR,
  RESET_BOOK_APPOINTMENT_ERROR
} from "../actionTypes";

////////////////////////////////// RESET LOGIN ERROR //////////////////////////////////

export function resetLoginError() {
  return async function(dispatch) {
    dispatch(updateLoginError());
  };
};

function updateLoginError() {
  return {type: RESET_LOGIN_ERROR};
};

////////////////////////////////// RESET CREATE TUTOR ERROR //////////////////////////////////

export function resetCreateTutorError() {
  return async function(dispatch) {
    dispatch(updateCreateTutorError());
  };
};

function updateCreateTutorError() {
  return {type: RESET_CREATE_TUTOR_ERROR};
};

////////////////////////////////// RESET CREATE STUDENT ERROR //////////////////////////////////

export function resetCreateStudentError() {
  return async function(dispatch) {
    dispatch(updateCreateStudentError());
  };
};

function updateCreateStudentError() {
  return {type: RESET_CREATE_STUDENT_ERROR};
};

////////////////////////////////// RESET CREATE APPOINTMENT ERROR //////////////////////////////////

export function resetCreateAppointmentError() {
  return async function(dispatch) {
    dispatch(updateCreateAppointmentError());
  };
};

function updateCreateAppointmentError() {
  return {type: RESET_CREATE_APPOINTMENT_ERROR};
};

////////////////////////////////// RESET GET TUTORS ERROR //////////////////////////////////

export function resetGetTutorsError() {
  return async function(dispatch) {
    dispatch(updateGetTutorsError());
  };
};

function updateGetTutorsError() {
  return {type: RESET_GET_TUTORS_ERROR};
};

////////////////////////////////// RESET CANCEL APPOINTMENT ERROR //////////////////////////////////

export function resetCancelAppointmentError() {
  return async function(dispatch) {
    dispatch(updateCancelAppointmentError());
  };
};

function updateCancelAppointmentError() {
  return {type: RESET_CANCEL_APPOINTMENT_ERROR};
};

////////////////////////////////// RESET BOOK APPOINTMENT ERROR //////////////////////////////////

export function resetBookAppointmentError() {
  return async function(dispatch) {
    dispatch(updateBookAppointmentError());
  };
};

function updateBookAppointmentError() {
  return {type: RESET_BOOK_APPOINTMENT_ERROR};
};

