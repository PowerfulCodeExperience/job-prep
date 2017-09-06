import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
import './DashBoard.css';
import Weather from '../Weather/Weather'
import { Button, Modal, Input, Icon } from 'semantic-ui-react'

import { getGoals, postGoal, getTasks, postTask, getJobActions, postJobAction } from '../../ducks/reducer'

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      task: '',
      jobAction: '',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
    this.handleJobActionSubmit = this.handleJobActionSubmit.bind(this)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    this.props.getTasks(this.props.user.id)
    this.props.getJobActions(this.props.user.id)
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
handleTaskSubmit(event) {
  event.preventDefault();
  this.props.postTask(this.state.task);
  this.setState({
    task: ''
  })
}
handleJobActionSubmit(event) {
  event.preventDefault();
  this.props.postJobAction(this.state.jobAction);
  this.setState({
    jobAction: ''
  })
}
  render(){
    const { open, dimmer } = this.state
    const {
      goals,
      tasks,
      jobActions
    } = this.props
    return(
      <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column className="column_dash">
                <Segment>Portfolio Piece</Segment>
                <Segment>My Tasks
                
                {/* <Button onClick={this.show('inverted')}>
                  <Icon name='add' size='large'/>
                  </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Task</Modal.Header>
          <Modal.Content> */}
            <Input 
            type='text'
            name='task'
            onChange={(e) => {this.handleChange(e)}}
            inverted placeholder={'Add task here...'}
            value={this.state.task}
            ></Input>
            <Button positive icon="checkmark" labelPosition='right' content="Add!" onClick={this.handleTaskSubmit} />
          {/* </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal> */}

                {
                  tasks.map((e, j) => 
                    (
                      <p key={j}>
                          {e.task}
                      </p>
                    )
                  )
                }

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
                <Button onClick={this.show('inverted')}>
          <Icon name='add' size='large'/>
        </Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Goal</Modal.Header>
          <Modal.Content>
            <Input 
            type='text'
            name='goal'
            onChange={this.handleChange} 
            inverted placeholder={'Add goal here...'}
            value={this.state.goal}
            ></Input>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon="checkmark" labelPosition='right' content="Add!" onClick={this.handleGoalSubmit} />
          </Modal.Actions>
        </Modal>
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
    goals: state.goals,
    tasks: state.tasks,
    jobActions: state.jobActions
  }
}

export default connect(mapStateToProps, { getGoals, postGoal, getTasks, postTask, getJobActions, postJobAction })(DashBoard);
