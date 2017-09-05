import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import DashGoalsModal from '../DashGoalsModal/DashGoalsModal';
import axios from 'axios';
import './DashBoard.css';
import Weather from '../Weather/Weather'

import { getGoals } from '../../ducks/reducer'

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      task: ''
    }
    this.handleGoalChange = this.handleGoalChange.bind(this)
    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
  }
  
  componentDidMount() {
    // console.log('goal', this.props.goals)
    this.props.getGoals(this.props.user.id)
}
handleGoalChange(event) {
  this.setState({
    goal: event.target.value
  })
}
handleTaskChange(event) {
  this.setState({
    task: event.target.value
  })
}
handleGoalSubmit(event) {
  event.preventDefault();
  axios.post('/api/postgoal', {
    goal: this.state.goal
  })
  .then(this.setState({goal:''}))
  .catch(error => error)
}
handleTaskSubmit(event) {
  event.preventDefault();
  axios.post('/api/postTask', {
    task: this.state.task
  })
}
  render(){
    const {
      goals
    } = this.props
    return(
      <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column className="column_dash">
                <Segment>Portfolio Piece</Segment>
                <Segment>My Tasks
                  <DashGoalsModal
                  header='Add a Task'
                  placeholder='Add your task here...'
                  handleSubmit={this.handleGoalSubmit}
                  onChange={this.handleGoalChange}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Jobs Applied Action</Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment>Interview Status
                <Weather/>
              </Segment>
                <Segment>Goals
                  <DashGoalsModal
                  header='Add a Goal'
                  placeholder='Add your goal here...'
                  handleSubmit={this.handleTaskSubmit}
                  onChange={this.handleTaskChange}
                  />
                {
                  goals.map((e, i) => 
                    (
                      <p key={i}>
                          {e.goal}
                      </p>
                    )
                  )
                }
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    goals: state.goals
  }
}

export default connect(mapStateToProps, { getGoals })(DashBoard);
