import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'semantic-ui-react';

import "./Landing.css";

class Landing extends Component {

  render() {
    return (
    <div className="Landing">
      <Button size="massive" color="blue" href={'http://localhost:3001/auth/'}>Login</Button>
    </div>
    )
  }
}

export default Landing;