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

//////////////////////////////////////  SET USER TO LOCAL STORAGE  //////////////////////////////////////

  // static getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem("user"));
  // };

//////////////////////////////////////  GET USER FROM LOGIN  //////////////////////////////////////

  static async login(email, password) {

    //     axios.post('http://localhost:3000/login',
    // {
    //   email: email,
    //   password: password
    // })
    // .then(resp => {
    //   console.log(resp);
    //   if(resp.data.error){
    //     alert(resp.data.error)
    //   } else {
    //     localStorage.setItem("token", resp.data.token);
    //     localStorage.setItem("user", JSON.stringify(resp.data.user));
    //     history.push("/me");
    //   }
    // })
    let res = await this.request("login", {email, password});
    console.log("res from login: ", res);
    const token = res.data.token;
    const user = res.data.user;
    user["token"] = token;
    console.log("user from login: ", user);
    return user;
  };

}


export default Services;