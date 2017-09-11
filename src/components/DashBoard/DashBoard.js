import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DashBoard.css';
// import Weather from '../Weather/Weather'
import { Input, Button, Icon, Card, Popup, Segment } from 'semantic-ui-react'

import { getGoals, postGoal } from '../../ducks/reducer'


class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: ''
      // task: '',
      
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    // this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
  }
  

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    // this.props.getTasks(this.props.user.id)
}
handleChange(event) {
  let name = event.target.name
  let value = event.target.value
  this.setState({
    [name]: value
  })
}

handleGoalSubmit(event) {
  event.preventDefault();
  this.props.postGoal(this.state.goal);
  this.setState({
    goal: ''
  })
}
// handleTaskSubmit(event) {
//   event.preventDefault();
//   this.props.postTask(this.state.task);
//   this.setState({
//     task: ''
//   })
// }
  render(){
    const {
      goals,

    } = this.props

    // const renderedTasks = tasks.map((e, j) => 
    //   (
    //   <li key={j}>
    //     {e.task}
    //   </li>
    //   )
    // )

    const renderedGoals = goals.map((e, i) => 
    (
      <li key={i} className="list">
          {e.goal}
      </li>

    )
  )
    return(
      <div className="dash_container">
          <div className="top_row">
            <a href=""><span className="link_spans">LinkedIn</span></a>
            <a href=""><span className="link_spans">Resume</span></a>
            <a href=""><span className="link_spans">Portfolio</span></a>
          </div>
      <div className="side_by">
          <div className="goal_renderings">
              <span className="daily_header">Daily Essentials
              </span>
              <div className="empty_input">
              <input 
                type='text'
                name='goal'
                inverted
                onChange={this.handleChange} 
                value={this.state.goal}
                className="input_input"
                >
              </input>
              <Button onClick={this.handleGoalSubmit} size="tiny">
                            <Button.Content visible>
                            </Button.Content>
                              <Button.Content hidden>
                                Add
                              </Button.Content>
                           </Button>
              </div>
                    
            {/* <Accordion>
              <Accordion.Title>Add</Accordion.Title>
              <Accordion.Content>
              <Input 
                type='text'
                name='goal'
                onChange={this.handleChange} 
                inverted placeholder={'Add goal here...'}
                value={this.state.goal}
                >
              </Input>
              <Button animated onClick={this.handleGoalSubmit}>
                            <Button.Content visible>
                            <Icon name='right arrow' />
                            </Button.Content>
                              <Button.Content hidden>
                                Add
                              </Button.Content>
                           </Button>
           
              </Accordion.Content>
            </Accordion> */}
            <Segment className="list_rendered" vertical>
              {renderedGoals}
            </Segment>
                </div>
                <div className="jobs_applied">
                  <span>Jobs Applied</span>
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
    // tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getGoals, postGoal })(DashBoard);
