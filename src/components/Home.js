import React, { useState, useEffect, Fragment, useRef } from 'react';
import axios from 'axios';
import { AiOutlineTeam, AiOutlineDown } from 'react-icons/ai';
import { FaChalkboardTeacher, FaRegHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [downArrowClicked, setDownArrowClicked] = useState(false);
  const downArrowRef = useRef();

  //SCROLL DOWN TO ALBUMS DIV WHEN ALBUMS ARE SET IN STATE
  useEffect(() => {
    const scrollPastCategories = () => {
      downArrowRef.current.scrollIntoView({behavior: "smooth"});
      setDownArrowClicked(false);
    };
    if (downArrowClicked) scrollPastCategories();
  }, [downArrowRef, downArrowClicked]);


  const updateDownArrow = () => {
    setDownArrowClicked(true);
  }


  return (
    <Fragment>
      <div className="title-home">
        <div className="title-home-overlay">
          <div className="title-home-overlay-header">
            <h1>Reaching Beyond The Gap</h1>
            <h2>To Extend Educational Achievement</h2>
          </div>
        </div>
        <div className="title-home-arrow">
          <a className="down-arrow" onClick={updateDownArrow}><AiOutlineDown size={64} color="#FFF" /></a>
        </div>
      </div>

    <div id="cards" className="how-it-works" ref={downArrowRef}>
      <div className="how-it-works-deck">

        <div className="how-it-works-card">
          <Link to="/volunteers"><AiOutlineTeam size={64} color="#4babb1" /></Link>
          <p className="card-header">VOLUNTEERS</p>
          <p>Interested in helping us bridge the education gap? Click below to learn more about becoming a volunteer.</p>
          <Link to="/volunteers"><button className="card-button">LEARN MORE</button></Link>
        </div>

        <div className="how-it-works-card">
          <a href="https://thedecnetwork.typeform.com/to/Jbca7QrZ"><FaChalkboardTeacher size={64} color="#4babb1" /></a>
          <p className="card-header">STUDENTS</p>
          <p>If you would like to sign up to learn from one of our tutors, please click below to apply.</p>
          <a href="https://thedecnetwork.typeform.com/to/Jbca7QrZ" class="card-button">SIGN UP</a>
        </div>

        <div className="how-it-works-card"> 
          <Link to="/about" ><FaRegHandshake size={64} color="#4babb1" /></Link>
          <p className="card-header">PARTNERS</p>
          <p>Our partners support our mission to bring resources to communities empowering the next generation.</p>
          <Link to="/about"><button className="card-button">FIND OUT MORE</button></Link>
        </div>

      </div>
    </div>
    </Fragment>
    
  )
}

export default Home;