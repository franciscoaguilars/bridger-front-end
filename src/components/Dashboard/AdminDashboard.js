import react from 'react';

const AdminDashboard = (props) => {
  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Admin Dashboard, ${props.attributes.email}`}</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4>Students To Approve</h4>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>Tutors To Approve</h4>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;