import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment, Button, Header, Icon, Modal } from 'semantic-ui-react';
import {getGoals} from '../../ducks/reducer';
import DashGoalsModal from '../DashGoalsModal/DashGoalsModal'

import Card from './../Card/Card.js';

import './DashBoard.css';

class DashBoard extends Component {
  state = {modalOpen: false}

  handleOpen = () => this.setState({modalOpen: true});
  handleClose = () => this.setState({modalOpen: false})
  componentDidMount() {
    console.log('goal', this.props.goals)
    this.props.getGoals(this.props.user.id)
}
  render(){
    const userImage = () => {
      if(this.props.user.picture) {
        return <img src={this.props.user.picture} alt="" />
      }
      else {
        return <img src={require("./user-default.png")} alt="" />
      }
    }

    return(
      // <div className="DashBoard">

      //   <div className="Status">
      //     <span>Status: Unemployed :(</span>
      //   </div>

      //   <header className="DashHead">
      //     {userImage()}
      //     Good Morning {this.props.user.firstname || 'Bucko'}!
      //   </header>

      //   <div className="Portal">
      //     <Card name="Tasks"/>
      //     <Card name="Day"/>
      //     <Card name="Goals"/>
      //   </div>

      // </div>
      <div>
        <Grid columns={3} divided className="main_dash">
          <Grid.Row stretched>
            <Grid.Column className="column_dash">
              <Segment textAlign="center">
                <h3>Portfolio Piece</h3>
                </Segment>
              <Segment>
              <h3>My Tasks</h3>
              <ul>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>
                <li>list of stuff</li>

              </ul>
                </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
              <h3>Job Application Actions</h3>
                </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment>
            <h3>Interview Status</h3>
              </Segment>
              <Segment>
                <h3>Goals<DashGoalsModal/></h3>
                
                {
                  this.props.goals.map((goal, i) => (
                    <p key={i} className="goals_list">{goal.goal}</p>
                  ))
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    goals: state.goals
  }
}

export default connect(mapStateToProps, {getGoals})(DashBoard);
