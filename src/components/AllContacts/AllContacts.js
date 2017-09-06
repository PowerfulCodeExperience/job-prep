import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AllContacts.css';

import Kard from './../Kard/Kard.js';
import {Card} from 'semantic-ui-react';
import {getCompanies, getAllContacts} from '../../ducks/reducer';

class AllContacts extends Component {
  constructor(props) {
    super(props);

    this.filterContacts = this.filterContacts.bind(this);

    this.state = {
      search: false
    }
  }

  componentDidMount() {
    this.props.getCompanies();
    this.props.getAllContacts();
  }

  filterContacts(event) {

  }

  render() {
    return (
      <div className="AllContacts">

        <header className="AllHeader">
          <h1 className="AllTitle"> Contacts </h1>
          <div className="SearchWrap">
            <input className="Search" placeholder="Search Contacts" onChange={(e) => {
              let value = e.target.value.toLowerCase();
              console.log('search', value)
              this.setState({search: value});
            }}/>
            <button className="SearchButton">
              <div className="Mag"> &#9906; </div>
            </button>
          </div>
        </header>

        <main className="AllWrap">

        {
          this.props.companies.map( (company) => {
            return (
              <section className="SingleWrap" key={company.companyid}>
                <h1 className="SingleTitle"> {company.companyname} </h1>
                <Card.Group>

                <div className="Card">
                  <div className="Plus"> + </div>
                  <span> New Contact </span>
                </div>
                
                {
                  this.props.allContacts.map((contact, i) => {
                    if(contact.companyname === company.companyname) {
                      return (
                        <Kard key={i}
                          i = {i}
                          contact = {contact}
                          setStatus = {this.setStatus} />
                    )}
                  })
                }
                </Card.Group>
              </section>
            )
          })
        }

        </main>
        <footer className="Footer"></footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    allContacts: state.allContacts
  }
}

export default connect(mapStateToProps, {getCompanies, getAllContacts})(AllContacts);