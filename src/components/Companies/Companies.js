import React, {Component} from 'react';
import {connect} from 'react-redux';

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

    // console.log("event", this.state)

    this.setState({
      company: "",
      linkedin: ""
    })
  }

  render() {
    console.log("companies", this.props.companies)
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

          <Button size='huge' onClick={this.handleSubmit}>Submit</Button>

        </div>

        <Table striped>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>LinkedIn</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.props.companies.map((company, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{company.companyname}</Table.Cell>
                  <Table.Cell>{company.companylinkedin}</Table.Cell>
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