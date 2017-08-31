import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        Contacts
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Contacts);