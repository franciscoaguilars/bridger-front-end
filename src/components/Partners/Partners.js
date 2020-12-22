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
    <div>
      <div className="partner-banner">
        <div className="partner-banner-overlay">
          <div className="partner-banner-overlay-header">Partnerships</div>
        </div>
      </div>
      <div className="container">
        <div className="partners-grid mb-4">
          {grid}
        </div>
      </div>
    </div>
    
  )
}

export default Partners;