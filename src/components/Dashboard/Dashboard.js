import react from 'react';
import StudentDashboard from './StudentDashboard';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="mb-4">My Dashboard</h1>
      <StudentDashboard />
    </div>
  )
}

export default Dashboard;