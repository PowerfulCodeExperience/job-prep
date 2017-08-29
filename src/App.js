import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/SideBar/Navigation';

import Landing from './components/Landing/Landing';
import DashBoard from './components/DashBoard/DashBoard';

import './App.css';

class Wrapper extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={ Landing } />
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
        <Route exact path="/" component={ Landing } > </Route>
        <Route path="/dash" component={ Wrapper }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
