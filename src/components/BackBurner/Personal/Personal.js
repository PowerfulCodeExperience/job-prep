import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Personal.css';

class Personal extends Component {
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
      <div className="Personal">

        <div className="Status">
          4:20 PM, August 30, 2017
          <span>Status: Unemployed :(</span>
        </div>

        <header className="TitleBar">
          {userImage()}
          Good Morning {this.props.user.firstname || 'Bucko'}!
        </header>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Personal);