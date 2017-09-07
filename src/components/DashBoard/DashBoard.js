import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import './DashBoard.css';
import Weather from '../Weather/Weather'
import { Accordion, Button, Modal, Input, List, Icon, Card } from 'semantic-ui-react'

import { getGoals, postGoal, getTasks, postTask } from '../../ducks/reducer'

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      task: '',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    this.props.getTasks(this.props.user.id)
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
  render(){
    const { open, dimmer } = this.state
    const {
      goals,
      tasks
    } = this.props

    const renderedTasks = tasks.map((e, j) => 
      (
      <li key={j}>
        {e.task}
      </li>
      )
    )

    return(
      <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column className="column_dash">
                <Segment>Portfolio Piece</Segment>
                
                <Card className="card_dash">
                  <Card.Content>
                  <Card.Header className="task_header">My Tasks</Card.Header>
                  <Accordion>
                    <Accordion.Title><Icon name='add' className="icons"/>Add a Task</Accordion.Title>
                      <Accordion.Content>
                        <Input 
                        type='text'
                        name='task'
                        onChange={this.handleChange}
                        inverted placeholder={'Add task here...'}
                        value={this.state.task}
                        ></Input>
                         <Button animated onClick={this.handleTaskSubmit}>
                            <Button.Content visible>Add</Button.Content>
                              <Button.Content hidden>
                                <Icon name='right arrow' />
                              </Button.Content>
                           </Button>
                        {/* <Button positive icon="checkmark" labelPosition='right' content="Add" onClick={this.handleTaskSubmit} /> */}
                     </Accordion.Content>
                  </Accordion>
                  <div>
                    <span>Most Recently Added Tasks</span>
                  <ul>
                {
                  renderedTasks.splice(3)
                }
              </ul>
                  </div>
              <Accordion>
                <Accordion.Title><Icon name='dropdown' className="drops"/>View All Tasks</Accordion.Title>
                <Accordion.Content>
              <ul>
                {
                  renderedTasks
                }
              </ul>
              </Accordion.Content>
              </Accordion>
              </Card.Content>
            </Card>
            </Grid.Column>
              <Grid.Column>
                <Segment>Jobs Applied Action</Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment>Interview Status
                <Weather/>
              </Segment>

                <Card>
                  <Card.Content>
                    <Card.Header>Daily Essentials</Card.Header>
                    
            <Accordion>
              <Accordion.Title><Icon name='add' className="icons" />Add Goal</Accordion.Title>
              <Accordion.Content>
              <Input 
                type='text'
                name='goal'
                onChange={this.handleChange} 
                inverted placeholder={'Add goal here...'}
                value={this.state.goal}
                >
              </Input>
           <Button positive icon="checkmark" labelPosition='right' content="Add!" onClick={this.handleGoalSubmit} />
              </Accordion.Content>
            </Accordion>
                
            

         <Accordion>
           <Accordion.Title><Icon name='dropdown' className="drops"/>View Goals</Accordion.Title>
           <Accordion.Content>
        <ul className="goals_list">
        {
          goals.map((e, j) => 
            (
              <li key={j}>
                  {e.goal}
              </li>
            )
          )
        }
        </ul>
           </Accordion.Content>
         </Accordion>
            
                  </Card.Content>
                </Card>
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
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getGoals, postGoal, getTasks, postTask })(DashBoard);
