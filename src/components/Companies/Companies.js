import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';

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

        <p>20 Company Challenge</p>

        <div className="companyInput">
            Company:<br/>
            <input type="text" name={'company'} placeholder="company" value={this.state.company} onChange={(e) => {this.handleChange(e)}} />
            <br/>
            LinkedIn:<br/>
            <input type="text" name={'linkedin'} placeholder="link" value={this.state.linkedin} onChange={(e) => {this.handleChange(e)}} />
            <br/><br/>
            <button onClick={this.handleSubmit}>Submit</button>
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