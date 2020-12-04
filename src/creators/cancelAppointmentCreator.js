import {CANCEL_APPOINTMENT, UPDATE_CANCEL_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";

/**
 * updates user object to filter out canceled appointment from
 * array of appointments currently in user's state
 * @param {integer} id - appointment primary key ID
 */
export function cancelAppointment(id) {

  return async function(dispatch) {
    try {
      await Services.updateAppointments(id);
      dispatch(removeAppointment(id));
    } catch(e) {
      console.log("HIT cancel appointment error: ", e);
      // dispatch(updateCancelAppointmentError(true));
    };
  };
};

function removeAppointment(id) {
  return {type: CANCEL_APPOINTMENT, id};
};

function updateCancelAppointmentError(id) {
  return {type: UPDATE_CANCEL_APPOINTMENT_ERROR, id};
};
