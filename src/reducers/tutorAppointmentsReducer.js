// import {DELETE_APPOINTMENT, UPDATE_APPOINTMENT, CREATE_APPOINTMENT} from "../actionTypes";

// // let { tutor: { appointments }} = JSON.parse(localStorage.getItem('user'));
// // const INITIAL_STATE = appointments ? appointments : {};
// // console.log(appointments);

// let user = JSON.parse(localStorage.getItem('user'));
// let tutor = false;
// if (user && user.tutor) tutor = true;
// const INITIAL_STATE = tutor ? user.tutor.appointments : {};
// console.log(user);


// export default function resultsReducer(state=INITIAL_STATE, action) {
//   switch(action.type) {
//     case DELETE_APPOINTMENT:
//       console.log(state.user);
//       return state.filter(appt => appt.id !== action.id);;
//     case UPDATE_APPOINTMENT:
//       return {};
//     case CREATE_APPOINTMENT:
//       return {};
//     default:
//       return state;
//   };
// };

