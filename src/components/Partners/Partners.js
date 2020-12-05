import React, {useState, useEffect} from 'react';
// import Tutor from './Tutor';
import axios from 'axios';
import Partner from './Partner';
import Services from '../../services/services';


const Partners = () => {

  const [partners, setPartners] = useState([])

  useEffect(()=> {
    const fetchPartners = async () => {
      const partners = await Services.getPartners();
      setPartners(partners);
    }
    fetchPartners();
  }, [])


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