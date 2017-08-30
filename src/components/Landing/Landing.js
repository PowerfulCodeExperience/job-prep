import React, { Component } from 'react';

import { Button, Header } from 'semantic-ui-react';

import "./Landing.css";

class Landing extends Component {

  render() {
    return (
    <div className="Landing">
      <div>
        <img src={require("./logowhiteblue.png")} alt="logo" /> 
      </div>
      <div className="Landing-Body">
        <Button size="massive" color="blue" href={'http://localhost:3001/auth/'}>Login</Button>
      </div>
    </div>
    )
  }
}

export default Landing;