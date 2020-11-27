import React, {useState, useEffect} from 'react';
import Tutor from './Tutor';
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

  const tutorsGrid = tutors.map( tutor => {
    return (
          <Tutor key={tutor.id} attributes={tutor} />
    )
  })

  return (
    <div className="container">
      <h1 className="mb-4">Available Tutors</h1>
      <div className="tutors-grid mb-4">
        {tutorsGrid}
      </div>
    </div>
  )
}

export default Tutors;