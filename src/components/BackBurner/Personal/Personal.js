import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Personal.css';

class Personal extends Component {
  render() {
    return (
      <div className="Personal">
        Personal
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Personal);