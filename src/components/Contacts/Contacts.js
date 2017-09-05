import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


import {Card, Input, Button, Dropdown, Table} from 'semantic-ui-react';

import {getContacts, postContact, updateStatus} from '../../ducks/reducer';
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
    console.log("e", e)
    console.log("data", data.value, company_id)
    let date = new Date();
    this.props.updateStatus(e, data.value, date, company_id)
  }

  render() {
    console.log("Props", this.props)
    // const options = [
    //   {key: "No Action Taken", text: "No Action Taken", value: "No Action Taken"},
    //   {key: "Request Sent", text: "Request Sent", value: "Request Sent"},  
    //   {key: "Connected", text: "Connected", value: "Connected"}
    // ]

    return (
      <div className="Contacts">

        <div>
          <h1>{this.state.company.companyname}</h1>
        </div>

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
              />

            )
          })
        }
        </Card.Group>

        {/* <Table striped celled>

          <Table.Header>
            <Table.Row>
              <Table.Header />
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>LinkedIn</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Date Contacted</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Outcome</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.props.contacts.map((contact, i) => {
                return (
                  <Table.Row>
                    <Table.Cell>{i+1}</Table.Cell>
                    <Table.Cell>{contact.firstname}</Table.Cell>
                    <Table.Cell>{contact.position}</Table.Cell>
                    <Table.Cell>{contact.linkedin}</Table.Cell>
                    <Table.Cell>{contact.status}</Table.Cell>
                    <Table.Cell>{contact.email}</Table.Cell>
                    <Table.Cell>{contact.datecontacted}</Table.Cell>
                    <Table.Cell>{contact.notes}</Table.Cell>
                    <Table.Cell>{contact.outcome}</Table.Cell>
                </Table.Row>
              )})
            }
          </Table.Body>

        </Table> */}
        
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

export default connect(mapStateToProps, {getContacts, postContact, updateStatus})(Contacts);