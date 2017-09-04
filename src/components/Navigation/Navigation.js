import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, signOut} from '../../ducks/reducer';

import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleNav: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.slideNav = this.slideNav.bind(this);
    this.swapButton = this.swapButton.bind(this);
  }

  toggleNav() {
    this.setState({toggleNav: !this.state.toggleNav});
  }

  slideNav() {
    if(!this.state.toggleNav) {return "Container"}
    else {return "Container Slider"}
  }

  swapButton() {
    if(!this.state.toggleNav) {return "MobileNav"}
    else {return "MobileNav Swap"}
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
    <div className="Navigation">

      <img className="MobileImage" src={require("./logowhiteblue.png")} alt="logo" />

      <div className={this.swapButton()} onClick={() => this.toggleNav()}> &#9776; </div>

      <div className={this.slideNav()}>
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
      <img src={this.props.user.picture} className={this.props.user.id?"UserImage":null} alt=""/>
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