import React, { Component } from 'react'
import { Button, Modal, Input, Icon } from 'semantic-ui-react'
import './DashGoalsModal.css'

class DashGoalsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
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
          <Modal.Header>{this.props.header}</Modal.Header>
          <Modal.Content>
            <Input type='text' onChange={this.props.onChange} fluid icon='add' inverted placeholder={this.props.placeholder}></Input>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content="Add!" onClick={this.props.handleSubmit} />
          </Modal.Actions>
        </Modal>
      </div>
      
    )
  }
}

export default DashGoalsModal

