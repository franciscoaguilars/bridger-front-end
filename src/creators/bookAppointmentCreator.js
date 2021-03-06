import {BOOK_APPOINTMENT, BOOK_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";
/**
 * updates appointment object to add student_id to the appointment (book an 
 * appointment)
 * @param {integer} id - appointment primary key student_id
 */
export function bookAppointment(appointment, student_id) {

  return async function(dispatch) {
    try {
      await Services.addStudentToAppointment(appointment, student_id);
      dispatch(reserveAppointment(appointment));
    } catch(e) {
      console.log("HIT book appointment error: ", e);
      dispatch(updateBookAppointmentError());
    };
  };
};

function reserveAppointment(appointment) {
  return {type: BOOK_APPOINTMENT, appointment};
};

function updateBookAppointmentError(id) {
  return {type: BOOK_APPOINTMENT_ERROR};
};
