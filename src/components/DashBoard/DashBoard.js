import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import DashGoalsModal from '../DashGoalsModal/DashGoalsModal'
import './DashBoard.css';

import { getGoals } from '../../ducks/reducer'

class DashBoard extends Component {
  
  componentDidMount() {
    console.log('goal', this.props.goals)
    this.props.getGoals(this.props.user.id)
}
  render(){
    const {
      goals
    } = this.props
    return(
            <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column className="column_dash">
                <Segment>Portfolio Piece</Segment>
                <Segment>My Tasks</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Jobs Applied Action</Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment>Interview Status</Segment>
                <Segment>Goals
                  <DashGoalsModal/>
                {
                  goals.map((e, i) => 
                    (
                      <p key={i}>
                          {e.goal}
                      </p>
                    )
                  )}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    goals: state.goals
  }
}

export default connect(mapStateToProps, { getGoals })(DashBoard);
