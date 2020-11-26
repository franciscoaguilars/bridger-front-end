import react from 'react';
import TutorModal from './TutorModal';


const Tutor = (props) => {
  return (
    <div className="tutor-card">
      <div className="tutor-card-image">

      </div>
      <div className="tutor-card-details">
        <h5>{`${props.attributes.first_name} ${props.attributes.last_name}`}</h5>
        <small><strong>{props.attributes.occupation}</strong></small>
        <small>{`${props.attributes.city}, ${props.attributes.state}, ${props.attributes.country}`}</small>
        
        <a className="badge badge-primary mt-1" type="button" data-toggle="modal" data-target={`#modal-${props.attributes.id}`}>
          See Details >>
        </a>
        <TutorModal attributes={props.attributes} />
      </div>
    </div>
  )
}

export default Tutor;