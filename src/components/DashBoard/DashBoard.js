import React, { Component } from 'react';
import {connect} from 'react-redux';

import Card from './../Card/Card.js';

import './DashBoard.css';

class DashBoard extends Component {

  render(){

    const userImage = () => {
      if(this.props.user.picture) {
        return <img src={this.props.user.picture} alt="" />
      }
      else {
        return <img src={require("./user-default.png")} alt="" />
      }
    }

    return(
      <div className="DashBoard">

        <div className="Status">
          <span>Status: Unemployed :(</span>
        </div>

        <header className="DashHead">
          {userImage()}
          Good Morning {this.props.user.firstname || 'Bucko'}!
        </header>

        <div className="Portal">
          <Card name="Tasks"/>
          <Card name="Day"/>
          <Card name="Goals"/>
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

export default connect(mapStateToProps)(DashBoard);