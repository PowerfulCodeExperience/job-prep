import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from './../../ducks/reducer.js';

import './Navigation.css';

class Navigation extends Component {

  // componentDidMount() {
  //   this.props.getUser();
  // }

  render() {
    return (
    <div className="Navigation">
      <div className="Container">
        <Link to="/dash" className="Logo">
          <img src={require("./logowhiteblue.png")} alt="logo" />
        </Link>
        <div className="Links">
          <Link to="/dash/companies">20 COMPANY CHALLENGE</Link>
          <Link to="/dash/interviews">INTERVIEWS</Link>
          <Link to="/dash/contacts">CONTACTS</Link>
          <Link to="/dash/resources">RESOURCES</Link>
          {/* <Link to="/dash/resume">RESUME</Link>
          <Link to="/dash/portfolio">PORTFOLIO</Link>
          <Link to="/dash/linkedin">LINKEDIN</Link>
          <Link to="/dash/personal">PERSONAL</Link> */}
          <Link to="/"><span>LOGOUT</span></Link>
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