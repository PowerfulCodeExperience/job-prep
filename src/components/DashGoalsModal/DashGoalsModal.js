import React from 'react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import './DashGoalsModal.css'

const DashGoalsModal = () => (
  <Modal size='small'trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Add a Goal</Modal.Header>
    <Modal.Content>
        <Input focus placeholder='Add goal...' className='goal_input'/><Button icon='add'/>
    </Modal.Content>
  </Modal>
)

export default DashGoalsModal