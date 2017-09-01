import React, {Component} from 'react';
import {connect} from 'react-redux';

// import axios from 'axios';

import {Button, Input} from 'semantic-ui-react';

import './Companies.css';

class Companies extends Component {
  constructor(props){
    super(props)

    this.state = {
      company: '',
      linkedin: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let updatedName = e.target.name
    console.log("updatedName", updatedName);
    let updatedValue = e.target.value
    this.setState({
      [updatedName]: updatedValue 
    })
  }

  handleSubmit(event){
    console.log("event", this.state)
  }

  render() {
    console.log("state", this.state)
    return (
      <div className="Companies">

        <h1>20 Company Challenge</h1>

        <div className="CompanyInput">

          <h3>Company:</h3>

          <Input 
            focus placeholder="Company" 
            type="text"
            name={"company"}
            value={this.state.company}
            onChange={(e) => {this.handleChange(e)}}
          />

          <br/>

          <h3>LinkedIn:</h3>

          <Input
            focus placeholder="URL"
            type="text"
            name={"linkedin"}
            value={this.state.linkedin}
            onChange={(e) => {this.handleChange(e)}}
          />

          <br/><br/>

          <Button size='huge' onClick={this.handleSubmit}>Submit</Button>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    companies: state.companies
  }
}

export default connect(mapStateToProps)(Companies);