import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Card, Input, Button} from 'semantic-ui-react';
import {getContacts, postContact, updateStatus, updateEmail} from '../../ducks/reducer';

import Kard from '../Kard/Kard';

import './Contacts.css';

class Contacts extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.renderInput = this.renderInput.bind(this);

    this.state = {
      company: {},
      name: "",
      position: "",
      linkedin: "",
      email: "",
      card: 'Card',
      flip: false
    }
  }

  componentWillMount() {
    axios.get(`/api/returnCompany/${this.props.match.params.id}`)
      .then(response => (
        this.setState({
        company: response.data[0]
      })
    ))

    this.props.getContacts(this.props.match.params.id)
    window.scrollTo(0, 0)
  }

  handleChange(event){
    let updatedName = event.target.name

    let updatedValue = event.target.value
    this.setState({
      [updatedName]: updatedValue 
    })
  }

  handleSubmit(event){
    this.props.postContact(this.state);

    this.setState({
      name: "",
      position: "",
      linkedin: "",
      email: ""
    });

    if(this.state.flip) {
      this.setState({
        card: 'Card Flip2Front',
        flip: false
      });
    }
  }
  
  setStatus(e, data, company_id) {
    let date = new Date();
    this.props.updateStatus(e, data.value, date, company_id)
  }

  flipCard() {
    if(!this.state.flip) {
      this.setState({
        card: 'Card Flip2Back',
        flip: true
      });
    }
  }

  renderInput() {
    return (
      <section className="InputWrap">
        <div className="Cancel" onClick={ () => this.setState({
          card: 'Card Flip2Front',
          flip: false
        })}> &#10006; </div>
        <p className="InputType"> Name </p>
          <Input 
            placeholder="Name" 
            type="text"
            name={"name"}
            value={this.state.name}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p className="InputType"> Position </p>
          <Input 
            placeholder="Position" 
            type="text"
            name={"position"}
            value={this.state.position}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p className="InputType"> LinkedIn </p>
          <Input 
            placeholder="LinkedIn Profile URL" 
            type="text"
            name={"linkedin"}
            value={this.state.linkedin}
            onChange={(e) => {this.handleChange(e)}}
          />
        <p className="InputType"> Email </p>
          <Input 
            placeholder="Email" 
            type="text"
            name={"email"}
            value={this.state.email}
            onChange={(e) => {this.handleChange(e)}}
          />
          
        <Button size="large" color="blue"
          onClick={this.handleSubmit}
          disabled={!this.state.name || !this.state.position || !this.state.linkedin}>
          SUBMIT
        </Button>
      </section>
    )
  }

  render() {
    return (
      <div className="Contacts">

        <header className="ContactsHeader">
          <h1 className="ContactsTitle">{this.state.company.companyname}</h1>
        </header>

        <main className="MainWrap">
          <section className="ContactsWrap">
          <h2 className="WrapTitle"> Contacts </h2>

            <Card.Group>

              <section className="CardWrap" onClick={() => this.flipCard()}>
                <div className={this.state.card}>

                  <div className="CardFront">
                    <div className="Plus"> + </div>
                    <p className="CardSub"> New Contact </p>
                  </div>

                  <div className="CardBack">
                    {this.renderInput()}
                  </div>

                </div>
              </section>

            {
              this.props.contacts.map((contact, i) => {
                return(
                  <Kard
                    key = {contact.id}
                    contact = {contact}
                    setStatus = {this.setStatus}
                    updateEmail = {this.props.updateEmail}
                    email = {this.props.email}
                  />
                )
              })
            }
            </Card.Group>

          </section>
        </main>
        
        <footer className="Footer"></footer>
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