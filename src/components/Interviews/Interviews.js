import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Interviews.css';

class Interviews extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Interviews">
        Jobs I've Applied For
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Interviews);