import React, { Component } from 'react';
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from './../../ducks/reducer.js';

import "./Navigation.css";

class Navigation extends Component {

  // signOut(){
  //   axios.get('/api/signout')
  // }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
    <div className="Navigation">
      <div className="Container">
        <img src={require("./logowhiteblue.png")} alt="logo" />
        <div className="Links">
          <Link to="">RESUME</Link>
          <Link to="">PORTFOLIO</Link>
          <Link to="">LINKEDIN</Link>
          <Link to="">PERSONAL</Link>
          <Link to="">20 COMPANY CHALLENGE</Link>
          <Link to="">INTERVIEWS</Link>
          <Link to="">JOB CONTACT</Link>
          <Link to=""><span>LOGOUT</span></Link>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser})(Navigation);