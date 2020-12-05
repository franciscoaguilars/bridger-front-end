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

    if (userObj && userObj.student) {
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

////////////////////////////////////// GET TUTORS FROM BACKEND ///////////////////////////////////

static async fetchTutors() {
      let res = await this.request(`api/v1/tutors.json`);
      console.log("res from getTutorsAppointments: ", res);
      const tutors = res.data;
      console.log("tutors from getTutorsAppointments: ", tutors);
      return tutors;
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