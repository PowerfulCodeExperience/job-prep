import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Card, Input, Button, Dropdown} from 'semantic-ui-react';
import {postContact} from '../../ducks/reducer';

import './ContactInput.css';

class ContactInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStatus = this.setStatus.bind(this);

    this.state = {
      name: "",
      position: "",
      linkedin: "",
      email: ""
    }
  }

  handleChange(event){
    let updatedName = event.target.name

    let updatedValue = event.target.value
    this.setState({
      [updatedName]: updatedValue 
    })
  }

  handleSubmit(event){
    this.props.postContact(this.state)

    this.setState({
      name: "",
      position: "",
      linkedin: "",
      email: ""
    })
  }
  
  setStatus(e, data, company_id) {
    let date = new Date();
    this.props.updateStatus(e, data.value, date, company_id)
  }

  render() {
    return (
      <div className="ContactInput">
        <p>Name:</p>
          <Input
            placeholder="Name"
            type="text"
            name={"name"}
            value={this.state.name}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p>Position: </p>
          <Input
            placeholder="Position"
            type="text"
            name={"position"}
            value={this.state.position}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p>LinkedIn: </p>
          <Input 
            placeholder="LinkedIn Profile URL" 
            type="text"
            name={"linkedin"}
            value={this.state.linkedin}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p>Email: </p>
          <Input 
            placeholder="Email" 
            type="text"
            name={"email"}
            value={this.state.email}
            onChange={(e) => {this.handleChange(e)}}
          />
          
        <Button 
          size='huge' 
          onClick={this.handleSubmit}
          disabled={!this.state.name || !this.state.position || !this.state.linkedin}>
          SUBMIT
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps, {postContact})(ContactInput);