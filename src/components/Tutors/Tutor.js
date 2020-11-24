import react from 'react';


const Tutor = (props) => {
  return (
    <div className="tutor-card">
      <div className="tutor-card-image">

      </div>
      <div className="tutor-card-details">
        <h5>{`${props.attributes.first_name} ${props.attributes.last_name}`}</h5>
        <small><strong>{props.attributes.occupation}</strong></small>
        <small>{`${props.attributes.city}, ${props.attributes.state}, ${props.attributes.country}`}</small>
        <small><em>{props.attributes.linked_in_link}</em></small>
      </div>
    </div>
  )
}

export default Tutor;