import React, { Component } from 'react';
import {connect} from 'react-redux';

import Card from './../Card/Card.js';

import './DashBoard.css';

class DashBoard extends Component {

  render(){

    console.log('props:', this.props);

    const userImage = () => {
      if(this.props.user.picture) {
        return <img src={this.props.user.picture} alt="" />
      }
      else {
        return <img src={require("./user-default.png")} alt="" />
      }
    }

    // const upDate = () => {
    //   let d = new Date();
    //   let sec = d.getSeconds();
    //   let month = d.getMonth();
    //   let day = d.getDate();
    //   let year = d.getYear();
    //   let date = sec + ':' + (month+1) + '/' + day + '/' + (1900+year);

    //   setInterval(() => {
    //     console.log(date);
    //   }, 1000);
    // }

    return(
      <div className="DashBoard">

        <div className="Status">
          <p>{JSON.stringify(now)}</p>
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