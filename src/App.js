import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Status from './Status.js';

import Landing from './components/Landing/Landing.js';
import Navigation from './components/Navigation/Navigation.js';
import DashBoard from './components/DashBoard/DashBoard.js';

import Companies from './components/Companies/Companies.js';
import Interviews from './components/Interviews/Interviews.js';
import Contacts from './components/Contacts/Contacts.js';
import JobResources from './components/JobResources/JobResources.js';

import './App.css';

export class Wrapper extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="RoutesContainer">
          <Switch>
            <Route exact path="/" component={ DashBoard } />
            <Route path="/companies" component={ Companies } />
            <Route path="/interviews" component={ Interviews } />
            <Route path="/contacts" component={ Contacts } />
            <Route path="/resources" component={ JobResources } />
          </Switch>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route path="/" component={ Status } /> */}
          <Route path="/landing" component={ Landing } />
          <Route path="/" component={ Wrapper } />
        </div>
      </Router>
    );
  }
}

export default App;