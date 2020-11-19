import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiVideo } from 'react-icons/bi';

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
    <Fragment>
      <div className="title-home">
      <div className="title-box-home">
        <h1>Improve Grades. Prepare for Life.</h1>
        <p>Delivering Tuturing and Mentorship to Bridge The Gap</p>
      </div>
      
    </div>
    <div className="how-it-works">
        <div className="how-it-works-header">
          <h2>How it works</h2>
        </div>
        <div className="how-it-works-deck">
          <div className="how-it-works-card">
            <p>1. Sign Up and Qualify for Bridger</p>
            <AiOutlineUserAdd size={64} />
          </div>
          <div className="how-it-works-card">
            <p>2. Find tutors and mentors for what you need help with</p>
            <FaChalkboardTeacher size={64} />
          </div>
          <div className="how-it-works-card"> 
            <p>3. Schedule a video chat and get going!</p>
            <BiVideo size={64} />
          </div>
        </div>
        
      </div>
    </Fragment>
    
  )
}

export default Home;