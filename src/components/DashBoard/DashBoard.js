import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import moment from 'moment';

import FA from 'react-fontawesome';

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
        <h1>DashBoard</h1>

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
