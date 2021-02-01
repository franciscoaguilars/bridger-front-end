import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//REDUX IMPORTS
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import ScrollToTop from './components/ScrollToTop';
import HttpsRedirect from 'react-https-redirect';

// FOR DEVELOPMENT / THERE ARE ISSUES WITH SOME BROWSERS WHEN USING REDUX DEVTOOLS
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//     && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// // FOR PRODUCTION
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  </HttpsRedirect>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
