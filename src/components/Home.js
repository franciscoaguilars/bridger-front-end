import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <Fragment>
      <div className="title-home">
      <div className="title-home-overlay">
        <div className="title-home-overlay-header">
          <h1>Reaching Beyond The Gap</h1>
          <h2>To Extend Educational Achievement</h2>
        </div>
      </div>
      
    </div>
    <div className="how-it-works">
      <div className="how-it-works-deck">
        <div className="how-it-works-card">
          <p>Interested in becoming a tutor?</p>
          <Link to="/volunteers">Learn more.</Link>
          <Link to="/volunteers"><AiOutlineUserAdd size={64} color="#E0B643" /></Link>
        </div>
        <div className="how-it-works-card">
          <p>Looking to schedule a session with one of our tutors?</p>
          <span className="mb-3">Sign up <a href="https://thedecnetwork.typeform.com/to/Jbca7QrZ">here.</a></span> 
          <a href="https://thedecnetwork.typeform.com/to/Jbca7QrZ"><FaChalkboardTeacher size={64} color="#E0B643" /></a>
          
        </div>
        <div className="how-it-works-card"> 
          <p>Is your organization interested in partnering with us?</p>
          <span>Find out more <Link to="/about" >here.</Link></span>
          <Link to="/about" ><FaHandshake size={64} color="#E0B643" /></Link>
        </div>
      </div>
    </div>
    </Fragment>
    
  )
}

export default Home;