import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import axios from 'axios';

import {Button, Input, Table, Checkbox} from 'semantic-ui-react';

import { postCompany, getCompanies, updateApplied } from '../../ducks/reducer';

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
    this.applied = this.applied.bind(this)
  }

  componentDidMount() {
    this.props.getCompanies();
    window.scrollTo(0, 0);
  }

  handleChange(e){
    let updatedName = e.target.name
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

  applied(event, data, id){
    let applied = data.checked;
    this.props.updateApplied(applied, id)
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

            <Button style={{'fontFamily':'"Nunito", sans-serif', 'fontWeight':'700'}} size='large' inverted
              disabled={this.state.company && this.state.linkedin?false:true}
              onClick={this.handleSubmit}>
              SUBMIT
            </Button>
          </section>

          <section className="TableWrap">
            <Table striped selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Company</Table.HeaderCell>
                  <Table.HeaderCell>LinkedIn</Table.HeaderCell>
                  <Table.HeaderCell>Applied</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
              {
                this.props.companies.map((company, i) => {
                  return (
                    <Table.Row key={i}>
                      <Table.Cell><Link to={`/contacts/${company.id}`} className="RowFill"><span className="Comp">{company.companyname}</span></Link></Table.Cell>
                      <Table.Cell><a className="RowFill" href={company.companylinkedin} target={"_blank"}>{company.companylinkedin}</a></Table.Cell>
                      <Table.Cell>
                      {
                        company.applied ? <Checkbox checked={company.applied} /> :
                        <Checkbox onChange={(e, data) => {this.applied(e, data, company.id)}} />
                      }
                      </Table.Cell>
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

export default connect(mapStateToProps, {postCompany, getCompanies, updateApplied})(Companies);