import axios from 'axios';
import { useSelector } from 'react-redux';

axios.interceptors.request.use(
  const currentUser = useSelector(store => store.user);

  function(config) {
    // const token = localStorage.getItem("token");
    const token = currentUser.token;
    
    if (token) {
      console.log(token);
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  });