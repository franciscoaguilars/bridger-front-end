import {UPDATE_APPOINTMENT, UPDATE_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";
/**
 * updates user object to filter out canceled appointment from
 * array of appointments currently in user's state
 * @param {integer} id - appointment primary key ID
 */
export function updateAppointment(updatedAppointment, appointment_id) {

  return async function(dispatch) {
    try {
      await Services.updateAppointment(updatedAppointment, appointment_id);
      dispatch(changeAppointment(updatedAppointment));
    } catch(e) {
      console.log("HIT create appointment error: ", e);
      dispatch(updateUpdateAppointmentError());
    };
  };
};

function changeAppointment(appointment) {
  return {type: UPDATE_APPOINTMENT, appointment};
};

function updateUpdateAppointmentError() {
  return {type: UPDATE_APPOINTMENT_ERROR};
};
