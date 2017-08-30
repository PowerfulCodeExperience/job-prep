import React, { Component } from 'react';
import {connect} from 'react-redux';

import './DashBoard.css';

class DashBoard extends Component {
  render(){

    console.log('props:', this.props);

    return(
      <div className="DashBoard">
        <header>
          <img src={this.props.user.picture} alt="profile-pic" />
          Good Morning Loser!
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

export default connect(mapStateToProps)(DashBoard);