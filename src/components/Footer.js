import react from 'react';

const Footer = () => {
  const divStyle = {
    position: 'absolute',
    bottom: -230,
    width: '100vw'
  };


  return(

    <div style={divStyle}>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="footer-contents pr-5">
                <img src="/images/sr_logo.png" alt="logo" width="100px" height="100px" class="mr-3" />
                Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="footer-contact d-flex align-items-center">
                <p><strong>info@thesmartreach.org</strong></p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
              <small>© The Smart Reach, 2021</small>
          </div>
          
          
        </div>
      </div>
    </div>
    
  )
}

export default Footer;