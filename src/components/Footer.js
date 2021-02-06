import react from 'react';
import useViewport from "../hooks/useViewport";

const Footer = () => {
  const {viewportWidth} = useViewport();
  let footer;

  if (viewportWidth > 1200) {
    footer = (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <div className="footer-contents pr-5">
                  <img src="/images/sr_logo.png" alt="logo" width="100px" height="100px" class="mr-3" />
                  <p>Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.</p>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12">
                <div className="footer-contact d-flex align-items-center">
                  <p>info@thesmartreach.org</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <small>© The Smart Reach, 2021</small>
            </div>
          </div>
        </div>
    );
  } else if (viewportWidth <= 1200 && viewportWidth > 770) {
    footer = (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div>
                <div className="footer-contents-no-border pr-5">
                  <img src="/images/sr_logo.png" alt="logo" width="100px" height="100px" class="mr-3" />
                  <p>Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <small>© The Smart Reach, 2021</small>
            </div>
          </div>
        </div>
    );
  } else if (viewportWidth <= 770 && viewportWidth > 400){
    footer = (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div>
                <div className="footer-contents-no-border">
                  <p className="footer-text-small">Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <small className="footer-text-small">© The Smart Reach, 2021</small>
            </div>
          </div>
        </div>
    );
  } else if (viewportWidth <= 400) {
    footer = (
        <div className="footer">
          <div className="container">
            <div className="row">
              <div>
                <div className="footer-contents-extra-small">
                  <p className="footer-text-extra-small">Smart Reach is a not-for-profit tutoring service founded on the idea that by providing educational support to economically disadvantaged students, we can bridge societal, medical, educational, and economical gaps between people, communities, and cities alike.</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <small className="footer-text-extra-small">© The Smart Reach, 2021</small>
            </div>
          </div>
        </div>
    );
  };

  return(
    <>
    {footer}
    </>
  );
};

export default Footer;