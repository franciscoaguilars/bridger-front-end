import React, {useState, useEffect} from 'react';
// import Tutor from './Tutor';
import axios from 'axios';
import Partner from './Partner';


const Partners = () => {

  const [partners, setPartners] = useState([])

  useEffect(()=> {
    const url = 'http://localhost:3000/api/v1/partners.json'
    axios.get(url, {
      headers: {"Authorization" : `Bearer ${localStorage.token}`}
    })
    .then(
      resp => {
        setPartners(resp.data);
        console.log(resp);
      })
    .catch( resp => console.log(resp) )
  }, [])

  const grid = partners.map( partner => {
    return (
      <Partner key={partner.id} attributes={partner} />
    )
  })

  return (
    <div className="container">
      <h1 className="mb-4">Our Partners</h1>
      <div className="partners-grid">
        {grid}
      </div>
    </div>
  )
}

export default Partners;