import React from 'react';
import { AiOutlineTeam } from 'react-icons/ai';

const Volunteers = () => {
  return (
    <div>
      <div className="volunteer-banner">
      <div className="volunteer-banner-overlay">
        <div className="volunteer-banner-overlay-header">Become A Volunteer</div>
      </div>
      </div>
        <div className="container">
        <div className="mb-5">
  
          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12 d-flex align-items-start">
              <h1 className="mb-4">Role of a Tutor</h1>
            </div>
            <div className="col-lg-8 col-sm-12">
              <p>
                Tutors are the backbone of Smart Reach. Tutors will form individual connections with their 
                students through diversified learning experiences to aid students in realizing their full academic potential.
                <br></br>
                <br></br>Tutors can look forward to:
              </p>
              <ul className="volunteer-list">
                <li>Supporting students academically for the duration of the semester</li>
                <li>Planning individual tutoring sessions at their and their student's availability</li>
                <li>Observing improved academic performance with their students</li>
                <li>Making an impact of their own in communities’ educational access across the country</li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-sm-12 d-flex align-items-start">
              <h1 className="mb-4">Become a Tutor</h1>
            </div>
            <div className="col-lg-8 col-sm-12">
              <p>
                Thank you for considering becoming a part of the Smart Reach team and joining our mission to reach 
                beyond the gap in education! Without you our students would not be able to meet  their full academic 
                potential, and for that we are truly grateful. To learn more about joining our team or to sign up to become a tutor, 
                please contact us by completing the registration form <a href="https://thedecnetwork.typeform.com/to/px6RmiMZ">here</a>. We will reach out to you as soon as possible 
                and greatly appreciate your consideration and support.
                <br></br>
                <br></br>Prerequisites:
              </p>
              <ul className="volunteer-list">
                <li>College degree</li>
                <li>Clear background check</li>
                <li>Previous tutoring experience is appreciated, but not required</li>
              </ul>
              <br></br>
              <p>Time Commitment:</p>
              <ul className="volunteer-list">
                <li>Up to you!</li>
                <li>We love to see students forming longitudinal connections with their tutors, but sessions will be made based on your availability and interests</li>
              </ul>
            </div>
          </div>

          <div className="volunteer-sign-up-box">
            <div className="how-it-works-deck">
              <div className="how-it-works-card">
                <AiOutlineTeam size={64} color="#4babb1" />
                <p className="card-header">JOIN US</p>
                <p>If this sounds like you we'd love to have you!</p>
                <a href="https://thedecnetwork.typeform.com/to/px6RmiMZ" class="card-button">SIGN UP</a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    
  )
}

export default Volunteers;