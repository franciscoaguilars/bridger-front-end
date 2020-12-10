import {CREATE_TUTOR, CREATE_TUTOR_ERROR} from "../actionTypes";
import Services from "../services/services";  

export function createTutor(tutor) {

  return async function(dispatch) {
    try {
      const user = await Services.createTutor(tutor);
      dispatch(makeTutor(user));
    } catch(e) {
      console.log("HIT create tutor error: ", e);
      dispatch(updateCreateTutorError());
    };
  };
};

function makeTutor(user) {
  return {type: CREATE_TUTOR, user};
};

function updateCreateTutorError() {
  return {type: CREATE_TUTOR_ERROR};
};
