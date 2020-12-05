import {BOOK_APPOINTMENT} from "../actionTypes";
import Services from "../services/services";
/**
 * updates appointment object to add student_id to the appointment (book an 
 * appointment)
 * @param {integer} id - appointment primary key student_id
 */
export function bookAppointment(id, student_id) {

  return async function(dispatch) {
    try {
      await Services.addStudentToAppointment(id, student_id);
      dispatch(reserveAppointment(id));
    } catch(e) {
      console.log("HIT book appointment error: ", e);
      // dispatch(updateCancelAppointmentError(true));
    };
  };
};

function reserveAppointment(id) {
  return {type: BOOK_APPOINTMENT, id};
};

// function updateCancelAppointmentError(id) {
//   return {type: UPDATE_CANCEL_APPOINTMENT_ERROR, id};
// };
