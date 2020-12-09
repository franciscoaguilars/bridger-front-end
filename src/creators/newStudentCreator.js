import {CREATE_STUDENT, CREATE_STUDENT_ERROR} from "../actionTypes";
import Services from "../services/services";  

export function createStudent(studentData) {

  return async function(dispatch) {
    try {
      const user = await Services.createStudent(studentData);
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
