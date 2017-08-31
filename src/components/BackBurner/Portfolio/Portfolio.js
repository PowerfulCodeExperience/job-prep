import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        Portfolio
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Portfolio);