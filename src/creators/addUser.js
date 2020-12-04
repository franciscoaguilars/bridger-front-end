import {ADD_USER, ADD_USER_ERROR} from "../actionTypes";

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