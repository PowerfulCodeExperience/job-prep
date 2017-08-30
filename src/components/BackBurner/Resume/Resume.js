import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        Resume
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Resume);