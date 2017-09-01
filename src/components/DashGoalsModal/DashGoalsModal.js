import React, { Component } from 'react'
import { Button, Modal, Input, Icon } from 'semantic-ui-react'
import './DashGoalsModal.css'
import axios from 'axios'

class DashGoalsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      goal: '',
      task: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      goal: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/postgoal', {
      goal: this.state.goal
    })
    .then(this.setState({goal:''}))
    .catch(error => error)
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        
        <Button onClick={this.show('inverted')}>
          <Icon name='add' size='large'/>
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Goal!</Modal.Header>
          <Modal.Content>
            <Input type='text' onChange={this.handleChange} fluid icon='add' inverted placeholder='Add a goal...'></Input>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content="Add!" onClick={this.handleSubmit} />
          </Modal.Actions>
        </Modal>
      </div>
      
    )
  }
}

export default DashGoalsModal

