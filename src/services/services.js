import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://fierce-chamber-92750.herokuapp.com";

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
    user["token"] = token;
    console.log("user from login: ", user);
    return user;
  };

//////////////////////////////////////  CANCEL APPOINTMENT  //////////////////////////////////////

  static async updateAppointments(id) {
    await this.request(`api/v1/appointments/${id}`, "delete");
  };

};


export default Services;