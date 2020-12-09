import {GET_TUTORS, GET_TUTORS_ERROR} from "../actionTypes";
import Services from "../services/services";
/**
 * updates appointment object to add student_id to the appointment (book an 
 * appointment)
 * @param {integer} id - appointment primary key student_id
 */
export function getTutors() {

  return async function(dispatch) {
    try {
      const tutors = await Services.fetchTutors();
      dispatch(getAllTutors(tutors));
    } catch(e) {
      console.log("HIT get tutors error: ", e);
      dispatch(updateGetTutorsError());
    };
  };
};

function getAllTutors(tutors) {
  return {type: GET_TUTORS, tutors};
};

function updateGetTutorsError() {
  return {type: GET_TUTORS_ERROR};
};
