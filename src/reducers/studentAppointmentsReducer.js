// import {BOOK_APPOINTMENT, CANCEL_APPOINTMENT} from "../actionTypes";

// // let { student: { appointments }} = JSON.parse(localStorage.getItem('user'));
// // const INITIAL_STATE = appointments ? appointments : {};
// // console.log(appointments);
// let user;
// try {
//   user = localStorage.getItem('user');
//   console.log("user, ", user);

// } catch(e) {
//   console.log("HIT error; ", e);
// }

// let student = false;
// if (user && user.student) student = true;
// const INITIAL_STATE = student ? user.student.appointments : {};
// console.log(user);



// export default function resultsReducer(state=INITIAL_STATE, action) {
//   switch(action.type) {
//     case BOOK_APPOINTMENT:
//       return state.filter(appt => appt.id !== action.id);
//     case CANCEL_APPOINTMENT:
//       console.log(state.user);
//       return state.filter(appt => appt.id !== action.id);;
//     default:
//       return state;
//   };
// };

