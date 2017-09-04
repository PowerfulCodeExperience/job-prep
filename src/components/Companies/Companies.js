import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import axios from 'axios';

import {Button, Input, Table} from 'semantic-ui-react';

import { postCompany, getCompanies } from '../../ducks/reducer';

import './Companies.css';

class Companies extends Component {
  constructor(props){
    super(props)

    this.state = {
      company: "",
      linkedin: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.props.getCompanies();
  }

  handleChange(e){
    let updatedName = e.target.name
    // console.log("updatedName", updatedName);
    let updatedValue = e.target.value
    this.setState({
      [updatedName]: updatedValue 
    })
  }

  handleSubmit(event){
    this.props.postCompany(this.state);

    this.setState({
      company: "",
      linkedin: ""
    })
  }

  render() {

    return (
      <div className="Companies">

        <h1>20 Company Challenge</h1>

        <div className="CompanyInput">

          <h3>Company:</h3>

          <Input 
            focus placeholder="Company" 
            type="text"
            name={"company"}
            value={this.state.company}
            onChange={(e) => {this.handleChange(e)}}
          />

          <br/>

          <h3>LinkedIn:</h3>

          <Input
            focus placeholder="URL"
            type="text"
            name={"linkedin"}
            value={this.state.linkedin}
            onChange={(e) => {this.handleChange(e)}}
          />

          <br/><br/>

          <Button 
            size='huge' 
            onClick={this.handleSubmit}
            disabled={(!this.state.company) || (!this.state.linkedin)}>
            Submit
          </Button>

        </div>

        <Table striped definition className="CompaniesTable">

          <Table.Header>
            <Table.Row>
              <Table.Header />
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>LinkedIn</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {
            this.props.companies.map((company, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{i+1}</Table.Cell>
                  <Table.Cell><Link to={`/contacts/${company.id}`}>{company.companyname}</Link></Table.Cell>
                  <Table.Cell><a href={company.companylinkedin} target={"_blank"}>{company.companylinkedin}</a></Table.Cell>
                </Table.Row>
              )
            })
          }
          </Table.Body>

        </Table>  
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    companies: state.companies
  }
}

export default connect(mapStateToProps, {postCompany, getCompanies})(Companies);