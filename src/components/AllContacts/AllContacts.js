import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './AllContacts.css';

import AllCon from './AllCon.js';
import ComCon from './ComCon.js';
import {getCompanies, getAllContacts, setSearch} from '../../ducks/reducer';

class AllContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: "AllTitle On",
      companies: "AllTitle",
      disable: false
    }
  }

  componentDidMount() {
    this.props.getCompanies();
    this.props.getAllContacts();
    window.scrollTo(0, 0);
  }

  onContacts() {
    this.setState({
      contacts: "AllTitle On",
      companies: "AllTitle",
      disable: false
    });
    this.props.setSearch(false);
  }

  onCompanies() {
    this.setState({
      contacts: "AllTitle",
      companies: "AllTitle On",
      disable: true
    });
  }

  render() { console.log('ALLCONSTATE', this.state.companies)
    return (
      <div className="AllContacts">

        <header className="AllHeader">
          <div className="WrapTitle">
            <Link to="/allcontacts" className="AllTitleLink"><h1 className={this.state.contacts} onClick={() => this.onContacts()}>
              Contacts
            </h1></Link>
            <Link to="/allcontacts/cc" className="AllTitleLink"><h1 className={this.state.companies} onClick={() => this.onCompanies()}>
              Companies
            </h1></Link>
          </div>
          <div className="SearchWrap">
            <input className="Search" placeholder={!this.state.disable?"Search Contacts":""} disabled={this.state.disable} onBlur={(e) => e.target.value = ''} onChange={(e) => {
              let value = e.target.value.toLowerCase();
              this.props.setSearch(value);
            }}/>
            <button className="SearchButton" disabled={this.state.disable}>
              <div className="Mag"> &#9906; </div>
            </button>
          </div>
        </header>

          <Switch>
            <Route exact path="/allcontacts" component={ AllCon } />
            <Route path="/allcontacts/cc" component={ ComCon } />
          </Switch>

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

export default connect(mapStateToProps, {getCompanies, getAllContacts, setSearch})(AllContacts);