import React, {useState, useEffect} from 'react';
// import Tutor from './Tutor';
import axios from 'axios';


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

  const list = partners.map( partner => {
    return (
      <ul>
        <li key={partner.id}>{partner.name}</li>
      </ul>
    )
  })

  return (
    <div>
      Partners Index!
      {list}
    </div>
  )
}

export default Partners;