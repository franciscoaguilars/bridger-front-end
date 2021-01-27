import react from 'react';
import { Link } from 'react-router-dom';
// import getCurrentUser from '../services/services';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../creators/resetUserCreator';


const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user);
  const localUrl = "http://localhost:3000"
  const herokuUrl = "https://fierce-chamber-92750.herokuapp.com"

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(resetUser());
    console.log(currentUser);
  };

  const PageLinks = () => {
    if(currentUser.role) {
      return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/me">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tutors">Tutors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteers">Volunteers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Our Team</Link>
            </li>
          </ul>
      )
    } else {
      return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Volunteer</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/partners">Partners</Link>
            </li> */}
          </ul>
      )
    }
  }

  const SessionLinks = () => {
    if(currentUser.role) {
      return(
        <ul className="navbar-nav ml-auto">
            <li className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="nav-avatar" alt="logout" src={`${herokuUrl}/${currentUser.avatar}`}/>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/signin" onClick={logOut}> Logout</Link>
              </div>
            </li>
        </ul>
      )
    } else {
      return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link className="nav-link" to="/signin">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
      )
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand d-flex align-items-center" to="/" ><img src="images/sr_logo.png" width="50px" height="50px" alt="logo" class="mr-1" />Smart Reach</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <PageLinks />
          {/* <SessionLinks /> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;