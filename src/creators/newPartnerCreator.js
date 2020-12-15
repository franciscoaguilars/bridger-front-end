import {CREATE_PARTNER, CREATE_PARTNER_ERROR} from "../actionTypes";
import Services from "../services/services";

export function createPartner(partner) {

  return async function(dispatch) {
    try {
      await Services.createPartner(partner);
      dispatch(setPartner(partner));
    } catch(e) {
      console.log("HIT create partner error: ", e);
      dispatch(updateCreatePartnerError());
    };
  };
};

function setPartner(partner) {
  return {type: CREATE_PARTNER, partner};
};

function updateCreatePartnerError(id) {
  return {type: CREATE_PARTNER_ERROR};
};
