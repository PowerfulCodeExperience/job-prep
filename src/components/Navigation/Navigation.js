import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, signOut} from '../../ducks/reducer';

import './Navigation.css';

class Navigation extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log("User: ", this.props.user)
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
          <Link to="/landing" onClick={this.props.signOut}><span>LOGOUT</span></Link>
        </div>
      </div>
      <img src={this.props.user.picture} style={{'borderRadius': '50%', 'width':'60px', 'position':'fixed', 'bottom':'0'}} alt=""/>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser, signOut})(Navigation);