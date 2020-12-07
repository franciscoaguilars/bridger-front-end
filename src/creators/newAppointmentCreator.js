import {CREATE_APPOINTMENT} from "../actionTypes";
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
      console.log("HIT cancel appointment error: ", e);
      // dispatch(updateDeleteAppointmentError(true));
    };
  };
};

function setAppointment(appointment) {
  return {type: CREATE_APPOINTMENT, appointment};
};

// function updateDeleteAppointmentError(id) {
//   return {type: UPDATE_DELETE_APPOINTMENT_ERROR, id};
// };
