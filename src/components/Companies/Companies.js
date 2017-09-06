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

        <h1 className="CompanyHeader">20 Company Challenge</h1>

        <main className="CompanyWrap">
          <section className="CompanyInput">

            <h3 className="CompanySub">Company:</h3>

            <Input 
              focus placeholder="Name" 
              type="text"
              name={"company"}
              value={this.state.company}
              onChange={(e) => {this.handleChange(e)}}
            />

            <h3 className="CompanySub">LinkedIn:</h3>

            <Input
              focus placeholder="URL"
              type="text"
              name={"linkedin"}
              value={this.state.linkedin}
              onChange={(e) => {this.handleChange(e)}}
            />

            <Button style={{'fontFamily':'"Nunito", sans-serif', 'fontWeight':'700'}} size='large' inverted onClick={this.handleSubmit}>SUBMIT</Button>
          </section>

          <section className="TableWrap">
            <Table striped selectable>
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
                      <Table.Cell><Link to={`/contacts/${company.id}`} className="RowFill">{company.companyname}</Link></Table.Cell>
                      <Table.Cell><a className="RowFill" href={company.companylinkedin} target={"_blank"}>{company.companylinkedin}</a></Table.Cell>
                    </Table.Row>
                  )
                })
              }
              </Table.Body>
              <Table.Footer></Table.Footer>
            </Table>
          </section>
        </main>
        
        <footer className="Footer"></footer>

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