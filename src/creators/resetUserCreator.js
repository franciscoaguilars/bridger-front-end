import {RESET_USER} from "../actionTypes";

export function resetUser() {
  return async function(dispatch) {
    dispatch(updateUser());
  };
};

function updateUser() {
  return {type: RESET_USER};
};
