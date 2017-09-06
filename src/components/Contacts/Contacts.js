import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Card, Input, Button, Dropdown} from 'semantic-ui-react';

import {getContacts, postContact, updateStatus, updateEmail} from '../../ducks/reducer';
import Kard from '../Kard/Kard';

import './Contacts.css';

class Contacts extends Component {
  constructor(props){
    super(props)

    this.state = {
      company: {},
      name: "",
      position: "",
      linkedin: "",
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/returnCompany/${this.props.match.params.id}`)
      .then(response => (
        this.setState({
        company: response.data[0]
      })
    ))

    this.props.getContacts(this.props.match.params.id)
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
    console.log("Contacts", this.props.contacts)
    return (
      <div className="Contacts">

        <div>
          <h1>{this.state.company.companyname}</h1>
          <h2>Employees</h2>
        </div>

        <div className="ContactInput">
          <div className="TopInput">
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
          </div>
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
            disabled={!this.state.name || !this.state.position || !this.state.linkedin}
          >
            Submit
          </Button>
        </div>

        <Card.Group>
        {
          this.props.contacts.map((contact, i) => {
            return(
              <Kard
                i = {i}
                contact = {contact}
                setStatus = {this.setStatus}
                updateEmail = {this.props.updateEmail}
                email = {this.props.email}
              />
            )
          })
        }
        </Card.Group>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, {getContacts, postContact, updateStatus, updateEmail})(Contacts);