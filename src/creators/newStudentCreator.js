import {CREATE_STUDENT, CREATE_STUDENT_ERROR} from "../actionTypes";
import Services from "../services/services";  

export function createStudent(formData) {

  return async function(dispatch) {
    try {
      const user = await Services.createStudent(formData);
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
