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
              <div className="footer-contents">
                Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="footer-contact">
                <p><strong>info@thesmartreach.org</strong></p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
              <small>© Jamieson Reinhard, Francisco Aguilar, Louis Garavaglia</small>
          </div>
          
          
        </div>
      </div>
    </div>
    
  )
}

export default Footer;