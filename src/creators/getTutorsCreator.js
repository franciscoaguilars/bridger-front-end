import {GET_TUTORS} from "../actionTypes";
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
      // dispatch(updateCancelAppointmentError(true));
    };
  };
};

function getAllTutors(tutors) {
  return {type: GET_TUTORS, tutors};
};

// function updateCancelAppointmentError(id) {
//   return {type: UPDATE_CANCEL_APPOINTMENT_ERROR, id};
// };
