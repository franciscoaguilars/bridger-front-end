import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Tutor from './Tutor';
import { getTutors } from '../../creators/getTutorsCreator';


const Tutors = () => {
  const dispatch = useDispatch();
  const tutors = useSelector(store => store.tutors)
  
  useEffect(()=> {
    dispatch(getTutors());
  }, []);
  
  

  const tutorsGrid = tutors.map( tutor => {
    return (
          <Tutor key={tutor.id} tutor={tutor} />
    )
  })

  return (
    <div className="container">
      <h1 className="mb-4">Available Tutors</h1>
      <div className="tutors-grid mb-4">
        {tutorsGrid}
      </div>
    </div>
  )
}

export default Tutors;