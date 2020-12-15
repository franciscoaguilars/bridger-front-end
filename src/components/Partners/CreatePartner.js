import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPartner } from '../../creators/newPartnerCreator';

const CreatePartner = () => {
  const [partner, setPartner] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setPartner(Object.assign({}, partner, {[e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('partner[image]', partner.image);
    formData.append('partner[name]', partner.partnerName);
    formData.append('partner[description]', partner.description);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    dispatch(createPartner(formData));
    history.push("/partners");
  }

  const onImageChange = (e) => { 
    e.preventDefault();
    setPartner({...partner, image: e.target.files[0] });
    console.log(('partner: ', partner));
  };


  return(
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="mr-2" htmlFor="image">Upload Partner Logo: </label>
          <input onChange={onImageChange} type="file" id="avatar" name="avatar" accept="image/*" multiple={false} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Partner Name</label>
          <input onChange={handleChange} name="partnerName" type="text" className="form-control" id="name" placeholder="Partner Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Partner Description</label>
          <input onChange={handleChange} name="description" as="textarea"  rows={3} className="form-control" id="description" placeholder="Description"></input>
        </div>
        
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreatePartner;