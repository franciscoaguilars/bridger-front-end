import React, { useEffect } from 'react';
import Partner from './Partner';
import {useDispatch, useSelector} from 'react-redux';
import { getPartners } from '../../creators/getPartnersCreator';


const Partners = () => {

  const dispatch = useDispatch();
  const partners = useSelector(store => store.partners)
  
  useEffect(()=> {
    dispatch(getPartners());
  }, []);
  


  const grid = partners.map( partner => {
    return (
      <Partner key={partner.id} attributes={partner} />
    )
  })

  return (
    <div className="container">
      <h1 className="mb-4">Our Partners</h1>
      <div className="partners-grid mb-4">
        {grid}
      </div>
    </div>
  )
}

export default Partners;