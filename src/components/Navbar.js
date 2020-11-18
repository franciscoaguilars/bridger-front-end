import react from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/me">Dashboard</Link>
        <Link to="/signin">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/tutors">Tutors</Link>
      </ul>
    </div>
  )
}

export default Navbar;