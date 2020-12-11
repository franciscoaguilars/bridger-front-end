import axios from 'axios';
import { useSelector } from 'react-redux';

axios.interceptors.request.use(

  function(config) {
    const token = localStorage.getItem("token");
    
    if (token) {
      console.log(token);
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  });
  