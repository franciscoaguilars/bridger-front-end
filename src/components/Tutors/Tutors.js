import React, {useState, useEffect} from 'react';
// import Tutor from './Tutor';
import axios from 'axios';


const Tutors = () => {

  const [tutors, setTutors] = useState([])

  useEffect(()=> {
    const url = 'http://localhost:3000/api/v1/tutors.json'
    axios.get(url, {
      headers: {"Authorization" : `Bearer ${localStorage.token}`}
    })
    .then(
      resp => {
        setTutors(resp.data);
        console.log(resp);
      })
    .catch( resp => console.log(resp) )
  }, [])

  const list = tutors.map( tutor => {
    return (
      <ul>
        <li key={tutor.id}>{tutor.first_name}</li>
      </ul>
    )
  })

  return (
    <div>
      Tutors Index!
      {list}
    </div>
  )
}

export default Tutors;