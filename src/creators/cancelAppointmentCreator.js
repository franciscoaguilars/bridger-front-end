import {CANCEL_APPOINTMENT, UPDATE_CANCEL_APPOINTMENT_ERROR} from "../actionTypes";
import Services from "../services/services";

/**

*/
export function cancelAppointment(id) {

  return async function(dispatch) {
    try {
      // await Services.updateAppointments(id);
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
