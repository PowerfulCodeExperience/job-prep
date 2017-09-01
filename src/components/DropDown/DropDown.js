import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default function DropDown(props) {
  return (
    <Accordion styled fluid active>

      <Accordion.Title>
        <Icon name='dropdown' />
        Title
      </Accordion.Title>
      <Accordion.Content>
        Content
      </Accordion.Content>

    </Accordion>
  )
}