import logo from './logo.svg';
import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard/Dashboard';
import Tutors from './components/Tutors/Tutors';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/me" component={Dashboard} />
          <Route exact path="/tutors" component={Tutors} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
