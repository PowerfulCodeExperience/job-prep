import React, {Component} from 'react';
import {Card, Dropdown} from 'semantic-ui-react';
import FA from 'react-fontawesome';
import moment from 'moment';

function Kard (props){

  const options = [
    {key: "No Action Taken", text: "No Action Taken", value: "No Action Taken"},
    {key: "Request Sent", text: "Request Sent", value: "Request Sent"},  
    {key: "Connected", text: "Connected", value: "Connected"}
  ]

  return(
    <Card key={props.i}>

      <Card.Content>
        <Card.Header content={props.contact.firstname} />
        <Card.Meta content={props.contact.position} />
        <Card.Description>
          <a href={props.contact.linkedin} target="_blank"><FA name="linkedin-square" size="3x"/></a>
          {
            (props.contact.email) ?
            <div>
              <a href={`mailto:${props.contact.email}`}><FA name="envelope-o" size="3x"/></a>
            </div> : null
          }
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
      Date of Last Action Taken:
      {
        (props.contact.status) ?
        <div>
          {moment(props.contact.datecontacted).format("l")}
        </div> : null
      }
      </Card.Content>

      <Card.Content extra>
        Status:<Dropdown inline fluid placeholder="No Action Taken" options={options} onChange={(e, value) => {this.setStatus(props.contact.id, value, props.contact.company_id)}}/>
      </Card.Content>

    </Card>
  )
}

export default Kard;