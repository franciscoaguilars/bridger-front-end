import {GET_PARTNERS, GET_PARTNERS_ERROR} from "../actionTypes";
import Services from "../services/services";


export function getPartners() {

  return async function(dispatch) {
    try {
      const partners = await Services.fetchPartners();
      dispatch(getAllPartners(partners));
    } catch(e) {
      console.log("HIT get tutors error: ", e);
      dispatch(updateGetPartnersError());
    };
  };
};

function getAllPartners(partners) {
  return {type: GET_PARTNERS, partners};
};

function updateGetPartnersError() {
  return {type: GET_PARTNERS_ERROR};
};