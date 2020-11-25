import react from 'react';

const CreateTutor = () => {
  return(
    <div className="container">
      <h2 className="mb-4">Create Your Tutor Profile</h2>
      <form>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input  name="firstName" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter your first name"></input>
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter your last name"></input>
        </div>
        <div className="form-group">
          <label for="city">City</label>
          <input name="city" type="text" className="form-control" id="city" placeholder="Enter your city"></input>
        </div>
        <div className="form-group">
          <label for="state">State</label>
          <input name="state" type="text" className="form-control" id="state" placeholder="Enter your state"></input>
        </div>
        <div className="form-group">
          <label for="country">Country</label>
          <input name="country" type="text" className="form-control" id="country" placeholder="Country"></input>
        </div>
        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input name="phone" type="tel" className="form-control" id="phone" placeholder="Where can we contact you?"></input>
        </div>
        <div className="form-group">
          <label for="occupation">Occupation</label>
          <input name="occupation" type="text" className="form-control" id="occupation" placeholder="Occupation"></input>
        </div>
        <div className="form-group">
          <label for="linkedin">LinkedIn</label>
          <input name="linkedin" type="url" className="form-control" id="linkedin" placeholder="LinkedIn profile"></input>
        </div>
 
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default CreateTutor;