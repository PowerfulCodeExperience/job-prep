import React, { Component } from 'react';
import {connect} from 'react-redux';
import './DashBoard.css';
// import Weather from '../Weather/Weather'
import { Accordion, Button, Input, Icon, Card, Popup } from 'semantic-ui-react'

import { getGoals, postGoal, getTasks, postTask, postUrl, getUrl } from '../../ducks/reducer'

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      task: '',
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this)
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this)
  }
  

  componentDidMount() {
    this.props.getGoals(this.props.user.id)
    this.props.getTasks(this.props.user.id)
    this.props.getUrl(this.props.user.id)
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
handleUrlSubmit(event) {
  event.preventDefault();
  this.props.postUrl(this.state.url)
  this.setState({
    url: ''
  })
}
  render(){
    const {
      goals,
      tasks,
      url
    } = this.props

    const renderedTasks = tasks.map((e, j) => 
      (
      <li key={j}>
        {e.task}
      </li>
      )
    )

    const renderedGoals = goals.map((e, i) => 
    (
      <li key={i}>
          {e.goal}
      </li>
    )
  )
    return(
      <div className="dash_container">
        
                <div className="portfolio_main">
                  
                    <span className="port_header">Portfolio Pieces</span>
                    <div className="circle_div">
                      <Popup
                      trigger={<Icon className="port_circle">3</Icon>}
                      content=
                      {<div>
                        <Input 
                      className='port_add'
                      label='http://' 
                      placeholder='mysite.com' 
                      type='text'
                      name='url'
                      onChange={this.handleChange}
                      value={this.state.url}
                      ></Input>
                      <Button className='port_add_button' animated onClick={this.handleTaskSubmit}><Icon name='plus' size='large'></Icon></Button>
                      </div>
                      }
                      on='click'
                      position='top right'
                      />
                    </div>
                 
                </div>
                
                <div className="card_dash">
                  
                  <span className="task_header">Tasks</span>
                  <Accordion>
                    <Accordion.Title><Icon name='add' className="icons" size='huge'/></Accordion.Title>
                      <Accordion.Content>
                        <Input 
                        type='text'
                        name='task'
                        onChange={this.handleChange}
                        inverted placeholder={'Add task...'}
                        value={this.state.task}
                        ></Input>
                         <Button animated onClick={this.handleTaskSubmit}>
                            <Button.Content visible>
                            <Icon name='right arrow' />
                            </Button.Content>
                              <Button.Content hidden>
                                Add
                              </Button.Content>
                           </Button>
                     </Accordion.Content>
                  </Accordion>
                  <Popup
                    trigger={<Button color='purple' icon='send' content='Task Viewer'/>}
                    content={renderedTasks}
                    on='click'
                    position='bottom right'
                  />
              
            </div>
           
                <Card>
                  <Card.Content>
                    <Card.Header>Application Actions</Card.Header>
                  </Card.Content>
                </Card>
             
              <Card>
                <Card.Content>
                  <Card.Header>Interview Status</Card.Header>
                </Card.Content>
              </Card>

                <div className="daily_e">
                    <span className="daily_header">Daily Essentials</span>
                    
            <Accordion>
              <Accordion.Title><Icon name='add' className="icons" size='huge' /></Accordion.Title>
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
            </Accordion>
            <Popup
              trigger={<Button color='red' icon='send' content='Activate Essentials'/>}
              content={renderedGoals}
              on='click'
              position='bottom right'
            />                 
                </div>
            </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    goals: state.goals,
    tasks: state.tasks,
    url: state.url
  }
}

export default connect(mapStateToProps, { getGoals, postGoal, getTasks, postTask, postUrl, getUrl })(DashBoard);
