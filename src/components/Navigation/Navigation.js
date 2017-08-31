import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
    <div className="Navigation">
      <div className="Container">
        <Link to="/" className="Logo">
          <img src={require("./logowhiteblue.png")} alt="logo" />
        </Link>
        <div className="Links">
          <Link to="/companies">20 COMPANY CHALLENGE</Link>
          <Link to="/interviews">INTERVIEWS</Link>
          <Link to="/contacts">CONTACTS</Link>
          <Link to="/resources">RESOURCES</Link>
          {/* <Link to="/dash/resume">RESUME</Link>
          <Link to="/dash/portfolio">PORTFOLIO</Link>
          <Link to="/dash/linkedin">LINKEDIN</Link>
          <Link to="/dash/personal">PERSONAL</Link> */}
          <Link to="/landing"><span>LOGOUT</span></Link>
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

export default connect(mapStateToProps)(Navigation);