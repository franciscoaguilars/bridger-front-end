import react from 'react';

const StudentDashboard = (props) => {
  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Student Dashboard, ${props.attributes.email}`}</h2>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <h4>My Information</h4>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>My Appointments</h4>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h4>My Progress</h4>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard;