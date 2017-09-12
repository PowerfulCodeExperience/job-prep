import React, { Component } from 'react';
import {connect} from 'react-redux';


// import { Grid, Segment, Modal } from 'semantic-ui-react';

import './DashBoard.css';


class DashBoard extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }


  render(){

    return(
      <div className = "DashBoard">

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
