import {RESET_USER} from "../actionTypes";
/**
 * updates appointment object to add student_id to the appointment (book an 
 * appointment)
 * @param {integer} id - appointment primary key student_id
 */
export function resetUser() {

  return async function(dispatch) {
    dispatch(resetTheUser());
  };
};

function resetTheUser() {
  return {type: RESET_USER};
};

// function updateCancelAppointmentError(id) {
//   return {type: UPDATE_CANCEL_APPOINTMENT_ERROR, id};
// };
