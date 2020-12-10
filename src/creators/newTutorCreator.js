import {CREATE_TUTOR, CREATE_TUTOR_ERROR} from "../actionTypes";
import Services from "../services/services";  

export function createTutor(formData) {

  return async function(dispatch) {
    try {
      const user = await Services.createTutor(formData);
      dispatch(makeTutor(user));
    } catch(e) {
      console.log("HIT create tutor error: ", e);
      dispatch(updateCreateTutorError(true));
    };
  };
};

function makeTutor(user) {
  return {type: CREATE_TUTOR, user};
};

function updateCreateTutorError(id) {
  return {type: CREATE_TUTOR_ERROR};
};
