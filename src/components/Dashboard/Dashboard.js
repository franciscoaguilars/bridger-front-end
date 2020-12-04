import react from 'react';
import StudentDashboard from './StudentDashboard';
// import getCurrentUser from '../../services/services';
import { useSelector } from 'react-redux';
import TutorDashboard from './TutorDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {

  // const currentUser = getCurrentUser();
  const currentUser = useSelector(store => store.user);
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
        <AdminDashboard attributes={currentUser} />
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