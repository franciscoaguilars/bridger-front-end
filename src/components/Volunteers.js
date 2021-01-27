import react from 'react';

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
            <div className="col-lg-4 col-sm-12 d-flex align-items-center d-flex align-items-center">
              <h1 className="mb-4">Want to join our amazing team of volunteers?</h1>
            </div>
            <div className="col-lg-8 col-sm-12">
              <p>We're looking for tutors that teach the following subjects ...  Does that sound like you? Click the link below and join us!</p>
            </div>
          </div>

          <div className="how-it-works">
            <div className="how-it-works-deck">
                <button className="volunteer-button">Sign Up Here</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    
  )
}

export default Volunteers;