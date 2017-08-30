import React, { Component } from 'react';

import './DashBoard.css';

class DashBoard extends Component {
  render(){
    return(
      <div className="DashBoard">
        <header>
          <img src="http://34.195.5.80/demo/wp-content/uploads/2017/01/abstract-user-flat-3.png" alt="profile-pic" />
          Good Morning Loser!
        </header>
      </div>
    )
  }
}

export default DashBoard;