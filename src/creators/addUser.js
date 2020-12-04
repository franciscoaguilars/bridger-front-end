import {ADD_USER, ADD_USER_ERROR} from "../actionTypes";

/**
 * updates the user state with an updated User
 * object from the database.
 * @param {object} user - user object received from backendcall
 */
export function addUser(user) {

  return async function(dispatch) {
    try {
      dispatch(updateUser(user));
    } catch(e) {
      console.log("ADD user error: ", e);
      // dispatch(addUserError(true));
    };
  };
};

function updateUser(user) {
  return {type: ADD_USER, user};
};

function addUserError(userError) {
  return {type: ADD_USER_ERROR, userError};
};