import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AllContacts.css';

import Kard from './../Kard/Kard.js';
import {Card} from 'semantic-ui-react';

class AllCon extends Component {

  render() {
    return (
      <main className="AllWrap">
        <section className="SingleWrap">
          <h1 className="SingleTitle"> All Contacts </h1>
            <div className="CardGroupWrap">
              <Card.Group>
              {
                this.props.allContacts.map((contact, i) => {
                  if(!this.props.search) {
                    return (
                      <Kard key={i}
                        i = {i}
                        contact = {contact}
                        setStatus = {this.setStatus}
                      />
                    )
                  }
                  else if(contact.firstname.toLowerCase().includes(this.props.search)) {
                    return (
                      <Kard key={i}
                        i = {i}
                        contact = {contact}
                        setStatus = {this.setStatus}
                      />
                    )
                  }
                })
              }
              </Card.Group>
            </div>
        </section>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    allContacts: state.allContacts,
    search: state.search
  }
}

export default connect(mapStateToProps)(AllCon);