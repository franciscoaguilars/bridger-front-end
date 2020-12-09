import {CANCEL_APPOINTMENT, CANCEL_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";
/**
 * updates user object to filter out canceled appointment from
 * array of appointments currently in user's state
 * @param {integer} id - appointment primary key ID
 */
export function cancelAppointment(id) {

  return async function(dispatch) {
    try {
      await Services.removeAppointments(id);
      dispatch(updatingAppointments(id));
    } catch(e) {
      console.log("HIT cancel appointment error: ", e);
      dispatch(updateCancelAppointmentError());
    };
  };
};

function updatingAppointments(id) {
  return {type: CANCEL_APPOINTMENT, id};
};

function updateCancelAppointmentError() {
  return {type: CANCEL_APPOINTMENT_ERROR};
};
