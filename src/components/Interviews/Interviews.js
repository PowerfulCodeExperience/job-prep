import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'semantic-ui-react';

import './Interviews.css';

class Interviews extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Interviews">
        Jobs I've Applied For

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>

            <Table.Body>

            </Table.Body>
          </Table.Header>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Interviews);