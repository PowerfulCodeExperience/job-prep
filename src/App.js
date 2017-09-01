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
// import Resume from './components/Resume/Resume.js';
// import Portfolio from './components/Portfolio/Portfolio.js';
// import LinkedIn from './components/LinkedIn/LinkedIn.js';
// import Personal from './components/Personal/Personal.js';

import './App.css';

export class Wrapper extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="RoutesContainer">
          <Switch>
            <Route exact path="/dash" component={ DashBoard } />
            <Route path="/dash/companies" component={ Companies } />
            <Route path="/dash/interviews" component={ Interviews } />
            <Route path="/dash/contacts" component={ Contacts } />
            <Route path="/dash/resources" component={ JobResources } />
            {/* <Route path="/dash/resume" component={ Resume } />
            <Route path="/dash/portfolio" component={ Portfolio } />
            <Route path="/dash/linkedin" component={ LinkedIn } />
            <Route path="/dash/personal" component={ Personal } /> */}
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
          <Route path="/" component={ Status } />
          <Route exact path="/" component={ Landing } />
          <Route path="/dash" component={ Wrapper } />
        </div>
      </Router>
    );
  }
}

export default App;