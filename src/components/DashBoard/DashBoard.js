import React, { Component } from 'react';
import {connect} from 'react-redux';

import './DashBoard.css';
// import { Segment } from 'semantic-ui-react';

import { Segment } from 'semantic-ui-react'

import { getGoals, getCompanies } from '../../ducks/reducer'


class DashBoard extends Component {

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    this.props.getCompanies(this.props.user.id)
  }

  render(){
    const { goals, companies } = this.props

    const renderedGoals = goals.map((e, i) => 
    {
      return(e.goal)
    }
  )
  const renderedApplied = companies.filter((e, j) => 
    {
      return(e.applied)
    }
  )
    return(
      <div className="dash_container">
          <div className="top_row">
            <a href={this.props.user.linked} target="_blank" rel="noopener noreferrer" className={!this.props.user.linked ? "not_active" : "active"}><span className="link_spans">LinkedIn</span></a>
            <a href={this.props.user.resume} target="_blank" rel="noopener noreferrer" className={!this.props.user.resume ? "not_active" : "active"}><span className="link_spans">Resume</span></a>
            <a href={this.props.user.portfolio} target="_blank" rel="noopener noreferrer" className={!this.props.user.portfolio ? "not_active" : "active"}><span className="link_spans">Portfolio</span></a>
          </div>
        <div className="side_by">
          <div className="goal_renderings">
            <span className="daily_header">Daily Essentials</span>
            <ul className="list_rendered">
              {
                renderedGoals.map((e, i) => {
                  return <li className="dash_li" key={i}>{e}</li>
                })
              }
            </ul>
          </div>
          <div className="jobs_applied">
            <span className="daily_header">Jobs Applied</span>
            <ul className="list_rendered">
              {
                renderedApplied.map((e, i) => {
                  return <li className="dash_li" key={i}>{e.companyname}</li>
                })
              }
            </ul>
          </div>
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
