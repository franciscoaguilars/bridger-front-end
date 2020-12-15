import react from 'react';

const Partner = (props) => {
  const localUrl = "http://localhost:3000"
  const herokuUrl = "https://fierce-chamber-92750.herokuapp.com"

  return(
    <div className="partner-card">
      <div>
        <img className="partner-card-image" src={`${localUrl}/${props.attributes.image}`} alt="partner" />
      </div>
      <div className="partner-card-details">
        <h5>{props.attributes.name}</h5>
        <p>{props.attributes.description}</p>
      </div>
    </div>
  )
}

export default Partner;