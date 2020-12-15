import {CREATE_APPOINTMENT, CREATE_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";
/**
 * updates user object to filter out canceled appointment from
 * array of appointments currently in user's state
 * @param {integer} id - appointment primary key ID
 */
export function createAppointment(appointment) {

  return async function(dispatch) {
    try {
      await Services.createAppointment(appointment);
      dispatch(setAppointment(appointment));
    } catch(e) {
      console.log("HIT create appointment error: ", e);
      dispatch(updateCreateAppointmentError());
    };
  };
};

function setAppointment(newAppointment) {
  return {type: CREATE_APPOINTMENT, newAppointment};
};

function updateCreateAppointmentError(id) {
  return {type: CREATE_APPOINTMENT_ERROR};
};
