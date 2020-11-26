import react from 'react';
import StudentDashboard from './StudentDashboard';
import getCurrentUser from '../../services/services';
import TutorDashboard from './TutorDashboard';

const Dashboard = () => {

  const currentUser = getCurrentUser();
  console.log(currentUser.role);
  

  const DisplayDashboard = () => {
    if(currentUser.role === "student"){
      return(
        <StudentDashboard attributes={currentUser} />
      )
    } else if(currentUser.role === "tutor") {
      return(
        <TutorDashboard attributes={currentUser} />
      )
    } else {
      return(
        <div>Admin Dashboard</div>
      )   
    }
  }

  return (
    <div className="container">
      <h1 className="mb-4">My Dashboard</h1>
      <DisplayDashboard />
    </div>
  )
}

export default Dashboard;