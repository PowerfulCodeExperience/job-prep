import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from './ducks/reducer.js';

import Landing from './components/Landing/Landing.js';

class Status extends Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {

    const pullStatus = () => {
      if(!this.props.user) {
        return <Landing/>
      }
    }

    return (
      <div>
        {pullStatus()}
      </div>
    )
  }
}
  
function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser})(Status);