import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

import "./Landing.css";

class Landing extends Component {

  render() {
    return (
    <div className="Landing">
      <Button style={{'fontFamily':'"Nunito", sans-serif', 'fontWeight':'700', 'color':'white'}} inverted color="blue" size="massive" href={'http://localhost:3001/auth/'}>LOGIN</Button>      
      <div className="Landing-Logo">
        <img src={require("./logowhiteblue.png")} alt="logo" /> 
      </div>
      <div className="Landing-Body">
      </div>
    </div>
    )
  }
}

export default Landing;