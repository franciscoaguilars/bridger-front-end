import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://fierce-chamber-92750.herokuapp.com/";
class Services {

//////////////////////////////////////  REQUEST METHOD  //////////////////////////////////////

  static async request(endpoint, paramsOrData = {}, verb = "get") {
    return (await axios({
      method: verb,
      url: `${BASE_URL}/${endpoint}`,
      [verb === "get" ? "params" : "data"]: paramsOrData}));
  };

//////////////////////////////////////  GET USER FROM LOGIN  //////////////////////////////////////

  static async login(email, password) {

    let res = await this.request("login", {email, password}, "post");
    console.log("res from login: ", res);
    const token = res.data.token;
    const userObj = res.data.user;  
    let user;


    if(!userObj){
      alert(res.data.error)
    } else if (userObj && userObj.student) {
      user = userObj.student;
      //SHOULD WE BE STORING THE PASSWORD IN LOCAL STORAGE? IS THAT SAFE? NO :)
      user["password"] = password;
      user["email"] = email;
      user["token"] = token;
      user["role"] = "student";
    } else if (userObj && userObj.tutor) {
      user = userObj.tutor;
      //SHOULD WE BE STORING THE PASSWORD IN LOCAL STORAGE? IS THAT SAFE? NO :)
      user["password"] = password;
      user["email"] = email;
      user["token"] = token;
      user["role"] = "tutor";
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    console.log("user from login: ", user);
    return user;
  };

////////////////////////////////////// CREATE STUDENT ////////////////////////////////////////////

static async createStudent(student) {
  let res = await this.request(`api/v1/students`, { student }, "post");
  console.log("res from create student: ", res);
  console.log(res.data.user.avatar);
  
  const userObj = res.data.user;
  let user;

  const currentUser = JSON.parse(localStorage.getItem("user"));
  user = userObj.student;
  user["email"] = currentUser.email;
  user["role"] = currentUser.role;
  user["password"] = currentUser.password;
  user["user_id"] = currentUser.id;
  user["avatar"] = currentUser.avatar;

  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
  console.log(user.avatar);
  
  return user;

};

  ////////////////////////////////////// CREATE TUTOR ////////////////////////////////////////////

static async createTutor(tutor) {
  let res = await this.request(`api/v1/tutors`, { tutor }, "post");
  console.log("res from create tutor: ", res);
  if(res.data.error){
    alert(res.data.error)
  } else {
    const userObj = res.data.user;
    let user;
    const currentUser = JSON.parse(localStorage.getItem("user"));
    user = userObj.tutor;
    user["email"] = currentUser.email;
    user["role"] = currentUser.role;
    user["password"] = currentUser.password;
    user["user_id"] = currentUser.id;
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
    return user;
  }
};

////////////////////////////////////// GET TUTORS FROM BACKEND ///////////////////////////////////

static async fetchTutors() {
      let res = await this.request(`api/v1/tutors.json`);
      console.log("res from getTutorsAppointments: ", res);
      const tutors = res.data;
      console.log("tutors from getTutorsAppointments: ", tutors);
      return tutors;
    };

//////////////////////////////////////  CREATE APPOINTMENT  //////////////////////////////////////

static async createAppointment(appointment) {
  await this.request(`api/v1/appointments`, { appointment }, "post");
};

//////////////////////////////////////  CANCEL APPOINTMENT  //////////////////////////////////////

  static async removeAppointments(id) {
    await this.request(`api/v1/appointments/${id}`, {}, "delete");
  };

  //////////////////////////////////// BOOK APPOINTMENT ////////////////////////

  static async addStudentToAppointment(appt_id, student_id) {
    await this.request(`api/v1/appointments/${appt_id}`, { student_id }, "put");
  }

//////////////////////////////////////  GETTING USER  //////////////////////////////////////

  static async getLoggedInUser(id, token) {
    console.log("id", id);
    console.log("token", token);
    let res = await this.request(`api/v1/users/${id}`);
    console.log("res from getLoggedInUser: ", res);
    const user = res.data.user;
    user["token"] = token;
    console.log("user from getLoggedInUser: ", user);
    return user;
  };

//////////////////////////////////////  GETTING PARTNERS  //////////////////////////////////////

  static async getPartners() {
    let res = await this.request(`api/v1/partners.json`);
    console.log("res from getPartners: ", res);
    return res.data;
  };

//////////////////////////////////////  GET TUTORS/APPOINTMENTS  //////////////////////////////////////

  static async getTutorsAppointments() {
    let res = await this.request(`api/v1/tutors.json`);
    console.log("res from getTutorsAppointments: ", res);
    const tutors = res.data.tutors;
    console.log("user from getTutorsAppointments: ", tutors);
    return tutors;
  };

};


export default Services;