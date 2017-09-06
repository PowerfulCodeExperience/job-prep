import React, {Component} from 'react';
import {Card, Dropdown, Modal, Button, TextArea, Input} from 'semantic-ui-react';
import FA from 'react-fontawesome';
import moment from 'moment';
import {connect} from 'react-redux';

import { updateEmail, postEmail } from '../../ducks/reducer';

import './Kard.css';

class Kard extends Component {
  constructor(props){
    super(props)
    this.state = { 
      open: false,
      notes: ""
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  open(){
    this.setState({ open: true })
  }

  close(){
    this.props.postEmail(this.props.email, this.props.contact.id, this.props.contact.company_id);
    this.setState({ open: false })
  }

  addNote(e){
    console.log("value", e.target.value)
  }

  render(){

  const options = [
    {key: "Request Sent", text: "Request Sent", value: "Request Sent"},  
    {key: "Connected", text: "Connected", value: "Connected"}
  ]
  console.log("email", this.props.contact)
  return(
    <Card key={this.props.i}>

      <Card.Content>
        <Card.Header content={this.props.contact.firstname} />
        <Card.Meta content={this.props.contact.position} />
        <Card.Description style={{"display": "flex", "justify-content":"center"}}>
          <a href={this.props.contact.linkedin} target="_blank"><FA name="linkedin-square" size="3x"/></a>
          {
            (this.props.contact.email) ?
            <div>
              <a href={`mailto:${this.props.contact.email}`}><FA name="envelope-o" size="3x"/></a>
            </div> :
            <div>
              <FA name="plus-circle" size="3x" onClick={() => this.open()}/>
            </div>
          }
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
      Date of Last Action Taken:
      {
        (this.props.contact.status !== "No Action Taken") ?
        <div>
          {moment(this.props.contact.datecontacted).format("l")}
        </div> : null
      }
      </Card.Content>

      <Card.Content extra>
        Status:<Dropdown inline fluid placeholder={this.props.contact.status} options={options} onChange={(e, value) => {this.props.setStatus(this.props.contact.id, value, this.props.contact.company_id)}}/>
      </Card.Content>

      <Card.Content extra>
        
        <div style={{"display": "flex", "justify-content": "space-between"}}>   
          <p>Notes:</p>
          <FA name="plus" id="note" onClick={(e) => alert(e)}/>
        </div>
        <div>
          <input onChange={(e) => this.addNote(e)}/>
        </div>
      </Card.Content>

      <Card.Content extra>
        {JSON.stringify(this.props.contact.notes)}
      </Card.Content>

      <Modal size="mini" open={this.state.open} >
        <Modal.Header>
          Add an Email:
        </Modal.Header>
        <Modal.Content>
          <input value={this.props.email} onChange={(e) => this.props.updateEmail(e)}/>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.close()}>Submit</Button>
        </Modal.Actions>
      </Modal>

      {/* <Card.Content extra>
        Delete
      </Card.Content> */}

    </Card>
  )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    email: state.email
  }
}

export default connect(mapStateToProps, {updateEmail, postEmail})(Kard);