import react from 'react';
import TutorModal from './TutorModal';


const Tutor = (props) => {
  const localUrl = "http://localhost:3000"
  const herokuUrl = "https://fierce-chamber-92750.herokuapp.com"

  return (
    <div className="tutor-card">
      <div>
        <img className="tutor-card-image" src={`${herokuUrl}/${props.tutor.avatar}`}/>
      </div>
      <div className="tutor-card-details">
        <h5>{`${props.tutor.first_name} ${props.tutor.last_name}`}</h5>
        <small><strong>{props.tutor.occupation}</strong></small>
        <small>{`${props.tutor.city}, ${props.tutor.state}, ${props.tutor.country}`}</small>
        
        <a className="badge badge-primary mt-1" type="button" data-toggle="modal" data-target={`#modal-${props.tutor.id}`}>
          See Details >>
        </a>
        <TutorModal attributes={props.tutor} />
      </div>
    </div>
  )
}

export default Tutor;