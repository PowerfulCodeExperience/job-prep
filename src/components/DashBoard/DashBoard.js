import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import {getGoals} from '../../ducks/reducer'

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
    console.log("user", this.props.user)
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
            <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column className="column_dash">
                <Segment>Portfolio Peice</Segment>
                <Segment>ToDo</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Jobs Applied Action</Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment>Interview Status</Segment>
                <Segment>Goals</Segment>
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

export default connect(mapStateToProps, {getGoals})(DashBoard);
