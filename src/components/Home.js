import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000/api/v1/students.json')
    .then( resp => setUsers(resp.data) )
    .catch( resp => console.log(resp) )
  }, [users.length])

  return (
    <div>
      Homepage!
    </div>
  )
}

export default Home;