import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Interviews.css';

class Interviews extends Component {
  render() {
    return (
      <div className="Interviews">
        Interviews
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Interviews);