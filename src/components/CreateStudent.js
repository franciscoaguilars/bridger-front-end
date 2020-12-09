import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createStudent } from '../creators/newStudentCreator';


const CreateStudent = () => {
  

  const [student, setStudent] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    const formData = new FormData();
    for (var value of formData.values()) {
      console.log(value); 
      }
    formData.append('avatar', student.avatar);
    formData.append('first_name', student.first_name);
    formData.append('last_name', student.last_name);
    formData.append('city', student.city);
    formData.append('state', student.state);
    formData.append('country', student.country);
    formData.append('phone_number', student.school);
    formData.append('occupation', student.occupation);
    formData.append('linked_in_link', student.linked_in_link);

    dispatch(createStudent(formData));
    history.push("/me");
  }

  const handleChange = (e) => {
    setStudent(Object.assign({}, student, {[e.target.name]: e.target.value, user_id: currentUser.id}));
    console.log(('student:', student));
  }

  const onImageChange = (e) => { 
    e.preventDefault();
    setStudent({...student, avatar: e.target.files[0] });
    console.log(('student: ', student));
  };

  return(
    <div className="container">
      <h2 className="mb-4">Create Your Student Profile</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label className="mr-2" htmlFor="avatar">Upload a Profile Picture:</label>
          <input onChange={onImageChange} type="file" id="avatar" name="avatar" accept="image/*" multiple={false} />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="first_name" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="last_name" type="text" className="form-control" id="lastName" placeholder="Last Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input onChange={handleChange} name="city" type="text" className="form-control" id="city" placeholder="City"></input>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input onChange={handleChange} name="state" type="text" className="form-control" id="state" placeholder="State"></input>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input onChange={handleChange} name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input onChange={handleChange} name="school" type="text" className="form-control" id="school" placeholder="School"></input>
        </div>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateStudent;