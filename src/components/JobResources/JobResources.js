import React, {Component} from 'react';
import {connect} from 'react-redux';

import './JobResources.css';

class JobResources extends Component {
  render() {
    return (
      <div className="Resources">
        Resources
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(JobResources);