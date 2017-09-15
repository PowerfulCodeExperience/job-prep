import React, {Component} from 'react';
import {Card, Dropdown, Modal, Button} from 'semantic-ui-react';
import FA from 'react-fontawesome';
import moment from 'moment';
import {connect} from 'react-redux';
import axios from 'axios';

import { updateEmail, postEmail, updateNote, postNote } from '../../ducks/reducer';

import './Kard.css';

class Kard extends Component {
  constructor(props){
    super(props)
    this.state = { 
      open: false,
      log: [],
      note: ''
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.addNote = this.addNote.bind(this);
    this.postitNote = this.postitNote.bind(this);
  }

  componentDidMount(){
    let id = this.props.contact.id

    axios.get(`/api/note/${id}`)
      .then(response => {

      this.setState({
        log: response.data
      })
    })
  }

  open(){
    this.setState({ open: true })
  }

  close(){
    this.props.postEmail(this.props.email, this.props.contact.id, this.props.contact.company_id);
    this.setState({ open: false })
  }

  addNote(e){
    let note = e.target.value

    this.setState({
      note: note
    })

    this.props.updateNote(e.target.value)
  }

  postitNote(e){
    let date = new Date()
    let bundle = {note: this.props.note, date, contact_id: this.props.contact.id, company_id: this.props.contact.company_id}
    axios.put('/api/note', bundle)
      .then(response => {
        this.setState({
          log: response.data,
          note: ''
        })
      })

    this.setState({
      note: ''
    })
  }

  render(){

  const options = [
    {key: "Request Sent", text: "Request Sent", value: "Request Sent"},  
    {key: "Connected", text: "Connected", value: "Connected"}
  ]
  return(
    <Card key={this.props.i}>

      {/* Name, Position, Linkedin, Add Email */}
      <Card.Content>
        <Card.Header content={this.props.contact.firstname} />
        <Card.Meta content={this.props.contact.position} />
        <Card.Description className="CardDescription" >
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

      {/* Date of last action taken */}
      <Card.Content extra>
        Date of Last Action Taken:
        {
          (this.props.contact.status !== "No Action Taken") ?
          <div>
            {moment(this.props.contact.datecontacted).format("l")}
          </div> : null
        }
      </Card.Content>

      {/* Status bar dropdown */}
      <Card.Content extra>
        Status:<Dropdown inline fluid placeholder={this.props.contact.status} options={options} onChange={(e, value) => {this.props.setStatus(this.props.contact.id, value, this.props.contact.company_id)}}/>
      </Card.Content>
      
      {/* Adding and posting a note */}
      <Card.Content extra>

        <div style={{"display": "flex", "justify-content": "space-between"}}>   
          <p>Notes:</p>
          <FA name="plus" onClick={(e) => this.postitNote(e)}/>
        </div>
        <div>
          <input className="KardInput" value={this.state.note} onChange={(e) => this.addNote(e)}/>
        </div>
      </Card.Content>

      {/* Displaying a note */}
      <Card.Content className="Notes" extra>
        {
          this.state.log.map((item, i) => {
            return (
              <div key={i}>
                {moment(item.datecreated).format("l")}
                <p>{item.note}</p>
              </div>
            )
          })
        }
      </Card.Content>

      {/* Modal to add an email */}
      <Modal size="mini" open={this.state.open} >
        <Modal.Header>
          Add an Email:
        </Modal.Header>
        <Modal.Content>
          <input className="KardInput" value={this.props.email} onChange={(e) => this.props.updateEmail(e)}/>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.close()}>Submit</Button>
        </Modal.Actions>
      </Modal>

    </Card>
  )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    email: state.email,
    note: state.note
  }
}

export default connect(mapStateToProps, {updateEmail, postEmail, updateNote, postNote})(Kard);