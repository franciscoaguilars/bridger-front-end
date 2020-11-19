import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  // const [students, setStudents] = useState([])

  // useEffect(()=> {
  //   const url = 'http://localhost:3000/api/v1/students.json'
  //   axios.get(url)
  //   .then( resp => setStudents(resp.data) )
  //   .catch( resp => console.log(resp) )
  // }, [students.length])

  // const list = students.map( student => {
  //   return (
  //     <ul>
  //       <li key={student.id}>{student.first_name}</li>
  //     </ul>
  //   )
  // })

  return (
    <div>
      Homepage!
    </div>
  )
}

export default Home;