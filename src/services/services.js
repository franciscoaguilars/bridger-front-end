import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

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
    const user = res.data.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    user["token"] = token;
    console.log("user from login: ", user);
    return user;
  };

//////////////////////////////////////  CANCEL APPOINTMENT  //////////////////////////////////////

  static async deleteAppointments(id) {
    await this.request(`api/v1/appointments/${id}`, {}, "delete");
  };

  //////////////////////////////////// BOOK APPOINTMENT ////////////////////////

  static async addStudentToAppointment(id, student_id) {
    await this.request(`api/v1/appointments/${id}`, { student_id }, "put");
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

};


export default Services;