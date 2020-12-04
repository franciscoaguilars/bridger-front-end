import {GET_USER, UPDATE_USER_ERROR} from "../actionTypes";
import Services from "../services/Services";

/**

*/
export function getUser(email, password) {

  return async function(dispatch) {
    try {
      const user = await Services.login(email, password);
      dispatch(updateUser(user));
    } catch(e) {
      console.log("HIT login error: ", e);
      dispatch(updateGetUserError(true));
    };
  };
};

function updateUser(user) {
  return {type: GET_USER, user};
};

function updateGetUserError(userError) {
  return {type: UPDATE_USER_ERROR, userError};
};