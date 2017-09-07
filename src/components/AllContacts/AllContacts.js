import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    window.scrollTo(0, 0);
  }

  filterContacts(event) {

  }

  render() {
    return (
      <div className="AllContacts">

        <header className="AllHeader">
          <div className="WrapTitle">
            <h1 className="AllTitle" tabIndex="1"> Contacts </h1>
            <h1 className="AllTitle" tabIndex="2"> Companies </h1>
          </div>
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
{/* setup 2 routes */}
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