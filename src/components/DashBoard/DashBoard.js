import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DashBoard.css';
import { Input, Button, Icon, Card, Popup, Segment } from 'semantic-ui-react'

import { getGoals, getCompanies } from '../../ducks/reducer'


class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: ''
      
    }
  }
  

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    this.props.getCompanies(this.props.user.id)
}

  render(){
    const {
      goals,
      companies

    } = this.props

    const renderedGoals = goals.map((e, i) => 
    (
      <li key={i} className="list">
          {e.goal}
      </li>

    )
  )
  const renderedApplied = companies.map((e, j) => 
    (
      <li key={j} className="list">
          {e.companyname}
      </li>

    )
  )
  console.log("companies", this.props.companies)
  console.log('renderedapplied', renderedApplied)
    return(
      <div className="dash_container">
          <div className="top_row">
            <a href={this.props.user.linked} target="_blank"><span className="link_spans">LinkedIn</span></a>
            <a href={this.props.user.resume} target="_blank"><span className="link_spans">Resume</span></a>
            <a href={this.props.user.portfolio} target="_blank"><span className="link_spans">Portfolio</span></a>
          </div>
      <div className="side_by">
          <div className="goal_renderings">
            <span className="daily_header">Daily Essentials</span>
            <div className="empty_input"></div>
            <Segment className="list_rendered" vertical>{renderedGoals}</Segment>
          </div>
          <div className="jobs_applied">
            <span className="daily_header">Jobs Applied</span>
            {/* <div className="empty_input"></div> */}
            <Segment className="list_rendered" vertical>{renderedApplied}</Segment>
          </div>
                {/* <div className="jobs_applied">
                  <span>Jobs Applied</span>
                
                <ul>
                {renderedApplied}
                </ul>
                </div> */}
                </div>
            </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    goals: state.goals,
    companies: state.companies
  }
}

export default connect(mapStateToProps, { getGoals, getCompanies })(DashBoard);
