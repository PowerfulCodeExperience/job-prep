import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResources} from  './../../ducks/reducer.js';

// import DropDown from './../DropDown/DropDown.js';
import { Accordion, Icon } from 'semantic-ui-react';

import './JobResources.css';

class JobResources extends Component {

  componentDidMount() {
    this.props.getResources();
  }

  render() {

    
    const BuildContent = this.props.resources.map(item => {
      let panelContent = (
        <Accordion.Content key={item.id}>
          <a target="_blank" href={item.link}>{item.title}</a>
        </Accordion.Content>
      );

      return panelContent;
    });

    const BuildDropDown = this.props.resources.map(item => {
      let dropPanel = (
        <Accordion styled fluid key={item.type}>
          <Accordion.Title>
            <Icon name='dropdown' />
            {item.type}
          </Accordion.Title>
          {BuildContent}
        </Accordion>
      );

      return dropPanel;
    });

    return (
      <div className="Resources">

        <div className="DropWrap">
          {BuildDropDown}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps, {getResources})(JobResources);