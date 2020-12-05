import react from 'react';
import StudentDashboard from './StudentDashboard';
import { useSelector } from 'react-redux';
import TutorDashboard from './TutorDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {

  const currentUser = useSelector(store => store.user.user);
  console.log(currentUser);
  

  const DisplayDashboard = () => {
    if(currentUser.role === "student"){
      return(
        <StudentDashboard  />
      )
    } else if(currentUser.role === "tutor") {
      return(
        <TutorDashboard  />
      )
    } else {
      return(
        <AdminDashboard  />
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