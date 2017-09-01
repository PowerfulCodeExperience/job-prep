import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Input, Button, Dropdown, Table} from 'semantic-ui-react';

import './Contacts.css';

class Contacts extends Component {
  render() {

    const options = [
      {key: "Connected", text: "Connected", value: "Connected"}, 
      {key: "Request Sent", text: "Request Sent", value: "Request Sent"}, 
      {key: "No Action Taken", text: "No Action Taken", value: "No Action Taken"}
    ]

    return (
      <div className="Contacts">

        <h1>Contacts</h1>
        
        <Card className="ContactInput">
          <Card.Content>
            <Card.Header>
              Nike
            </Card.Header>
          </Card.Content>

          <Card.Content>
            Name: <Input placeholder="Name" /> <br/>
            Position: <Input placeholder="Position" />
            LinkedIn: <Input placeholder="LinkedIn" />
            Status: <Dropdown placeholder="Status" options={options} />  
            Email: <Input placeholder="Email" />
            Personal Email: <Input placeholder="Personal Email" />
          </Card.Content>
          <Card.Content Extra>
            <Button >Submit</Button>
          </Card.Content>
        </Card>

        <Table striped celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>LinkedIn</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
                Connected
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
               <Dropdown placeholder="Status" options={options} />
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
                Connected
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
                Connected
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
                Connected
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                George
              </Table.Cell>
              <Table.Cell>
                CTO
              </Table.Cell>
              <Table.Cell>
                www.linkedin.com/in/glopez
              </Table.Cell>
              <Table.Cell>
                Connected
              </Table.Cell>
              <Table.Cell>
                glopez@gmail.com
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps)(Contacts);