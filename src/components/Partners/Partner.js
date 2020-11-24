import react from 'react';

const Partner = (props) => {
  return(
    <div className="partner-card">
      <div className="partner-card-image"></div>
      <div className="partner-card-details">
        <h5>{props.attributes.name}</h5>
        <p>{props.attributes.description}</p>
      </div>
    </div>
  )
}

export default Partner;