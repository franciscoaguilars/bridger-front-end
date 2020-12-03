import axios from 'axios';
import AuthService from './services/services';
import './sass/App.scss';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard/Dashboard';
import Tutors from './components/Tutors/Tutors';
import CreateStudent from './components/CreateStudent';
import CreateTutor from './components/CreateTutor';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/me" component={Dashboard} />
          <Route exact path="/tutors" component={Tutors} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/students/create" component={CreateStudent} />
          <Route exact path="/tutors/create" component={CreateTutor} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


// // FOR DEVELOPMENT / THERE ARE ISSUES WITH SOME BROWSERS WHEN USING REDUX DEVTOOLS
// const store = createStore(
// //   rootReducer,
// //   compose(
// //     applyMiddleware(thunk),
// //     window.__REDUX_DEVTOOLS_EXTENSION__
// //     && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // );

// // FOR PRODUCTION
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App/>
//       </React.StrictMode>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// reportWebVitals();
