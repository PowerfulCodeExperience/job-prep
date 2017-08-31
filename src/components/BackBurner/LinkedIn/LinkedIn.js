import React, {Component} from 'react';
import {connect} from 'react-redux';

import './LinkedIn.css';

class LinkedIn extends Component {
  render() {
    return (
      <div className="LinkedIn">
        LinkedIn
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(LinkedIn);