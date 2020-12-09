import React, {useEffect} from 'react';

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
    <div onClick={toggleTimer} className="FlashMessage">
      <p>{message}</p>
    </div>
  );
};

export default FlashMessage;