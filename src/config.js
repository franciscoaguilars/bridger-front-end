import axios from 'axios';

axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    
    if (token) {
      console.log(token);
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  });