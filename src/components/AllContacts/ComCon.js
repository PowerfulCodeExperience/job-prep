import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './AllContacts.css';

import Kard from './../Kard/Kard.js';
import {Card} from 'semantic-ui-react';

class ComCon extends Component {
  render() {
    return (
      <main className="AllWrap">
        {    
          this.props.companies.map( (company) => {
            return (
              <section className="SingleWrap" key={company.companyid}>
                <h1 className="SingleTitle"><Link to={`/contacts/${company.id}`} className="TitleLink"> {company.companyname} </Link></h1>
                <Card.Group>   
                {
                  this.props.allContacts.map((contact, i) => {
                    if(contact.companyname === company.companyname) {
                      return (
                        <Kard key={i}
                          i = {i}
                          contact = {contact}
                          setStatus = {this.setStatus}
                        />
                    )} else {
                      return (
                        null
                      )
                    }
                  })
                }
                </Card.Group>
              </section>
            )
          })
        }
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    allContacts: state.allContacts
  }
}

export default connect(mapStateToProps)(ComCon);