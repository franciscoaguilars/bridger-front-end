import React, {useEffect} from 'react';
import {Spring} from 'react-spring/renderprops';

const FlashMessage = ({message, setState}) => {

  useEffect(() => {

    const intervalId = setInterval(() => {
      setState(false);
    }, 4000);

      return () => clearInterval(intervalId);
  }, [setState]);

  const toggleTimer = () => {
    setState(false);
  }

  return (
    <Spring
      from={{marginRight: -2000}}
      to={{marginRight: 0}}
      config={{delay: 100, duration: 1000}}
    >
      {props => (
        <div style={props}>

          <div onClick={toggleTimer} className="FlashMessage">
            <ion-icon name="close-outline"></ion-icon>
            <p>{message}</p>
          </div>

        </div>
      )}
    </Spring>
  );
};


export default FlashMessage;

