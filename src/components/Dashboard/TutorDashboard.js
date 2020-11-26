import react from 'react';

const TutorDashboard = () => {
  return(
    <div>
      <h2 className="mb-4">Welcome to the Tutor Dashboard</h2>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <h4>My Information</h4>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>My Appointments</h4>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>My Students</h4>
        </div>
      </div>
    </div>
  )
}

export default TutorDashboard;