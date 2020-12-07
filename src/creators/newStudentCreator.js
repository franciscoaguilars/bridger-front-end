import {CREATE_STUDENT} from "../actionTypes";
import Services from "../services/services";  
/**
 * updates user object to filter out canceled appointment from
 * array of appointments currently in user's state
 * @param {integer} id - appointment primary key ID
 */
export function createStudent(student) {

  return async function(dispatch) {
    try {
      const user = await Services.createStudent(student);
      dispatch(makeStudent(user));
    } catch(e) {
      console.log("HIT create student error: ", e);
      // dispatch(updateDeleteAppointmentError(true));
    };
  };
};

function makeStudent(user) {
  return {type: CREATE_STUDENT, user};
};

// function updateDeleteAppointmentError(id) {
//   return {type: UPDATE_DELETE_APPOINTMENT_ERROR, id};
// };
