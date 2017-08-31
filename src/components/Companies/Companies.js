import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Companies.css';

class Companies extends Component {
  render() {
    return (
      <div className="Companies">
        Companies
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Companies);