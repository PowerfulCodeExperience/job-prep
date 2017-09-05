import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getResources} from  './../../ducks/reducer.js';

import { Accordion, Icon } from 'semantic-ui-react';

import './JobResources.css';

class JobResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.dropDown = this.dropDown.bind(this);
    this.capLetter = this.capLetter.bind(this);
  }

  componentDidMount() {
    this.props.getResources();
  }

  capLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  dropDown() {
    let types = [];

    this.props.resources.forEach(item => {
      if(!types.includes(item.type)){
        types.push(item.type)
      }
    });

    types = types.map(type => {
      return {type: type, resources: []};
    });

    types.forEach( (set, i, arr) => {
      this.props.resources.forEach(resource => {
        if(resource.type === arr[i].type) {
          types[i].resources.push(resource);
        }
      });
    });

    let dropDown = types.map(item => {
      return (
        <Accordion styled fluid key={item.type}>

          <Accordion.Title>
            <Icon name='dropdown'/>
            {this.capLetter(item.type)}
          </Accordion.Title>

          <Accordion.Content>
          {item.resources.map(set => {
            return (
              <div className="PanelContent" key={set.title}>
                <a className="PanelRow" href={set.link} target="_blank">{set.title}</a>
              </div>
            );
          })}
          </Accordion.Content>

        </Accordion>
      );
    });

    return dropDown;
  }

  render() {
    return (
      <div className="Resources">

        <div className="ResourceWrap">
          <h1 className="ResourceHeader"> Resources </h1>
          {this.dropDown()}
        </div>

        <footer className="Footer"></footer>

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