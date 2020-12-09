import {CREATE_STUDENT, CREATE_STUDENT_ERROR} from "../actionTypes";
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
      dispatch(updateCreateStudentError(true));
    };
  };
};

function makeStudent(user) {
  return {type: CREATE_STUDENT, user};
};

function updateCreateStudentError(id) {
  return {type: CREATE_STUDENT_ERROR};
};
