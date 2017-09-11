import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import moment from 'moment';

import FA from 'react-fontawesome';

// import { Grid, Segment, Modal } from 'semantic-ui-react';

import './DashBoard.css';

function Forcast(props){
  return(
    <div className = "Weather-Date">
      <h1 style={{"font-size" : "32px", "font-weight" : "bold", "text-align" : "center" }}>Weather</h1>
        <img src="https://www.weatherbit.io/static/img/icons/c01d.png" alt="weather" />
        <p>
          {props.description}
        </p>
        <p>
          {props.temperature}
        </p>
        <p>
        {moment(props.date).format("dddd MMM Do YY")}
        </p>
    </div>
  )  
}

function Goals(props){
  return(
    <div className = "Goals">

      <div className="GoalsHeader">
        <h1>Goals</h1>
        <FA name="plus-circle" size="2x" onClick={() => alert("Add Goal")}/>
      </div>

      <ul>
        <li>
          Apply to an average of 3 jobs per day. Research each job and customize my resume to each job.
        </li>
        <li>
          Code and average of 4 hours per day. As well as review Toy problems and practice whiteboarding
        </li>
        <li>
          Finish a new portfolio piece every 2 weeks
        </li>
        <li>
          Reach out to 4 people on Linkedin every day
        </li>
        <li>
          Tour 2 companies offices per week
        </li>
        <li>
          Apply to 5 jobs outside of target search area per week
        </li>
        <li>
          Attend 2 meetups/ Networking events per week
        </li>
      </ul>

    </div>
  )
}

class Essentials extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.close = this.close.bind(this)
    this.show = this.show.bind(this)
  }
  close(){
    this.setState({open: false})
  }
  show(id){
    console.log("id")
    this.setState({ open: true})
  }
  render(){
    return(
      <div className = "Self">
        {/* <h1>Essentials</h1>
          <div className = "LinksToSelf">
            <div className = "Item"> */}
              {/* <a href="http://www.linkedin.com/in/imkhem" target="_blank"> */}
              {/* <FA name="linkedin-square" size="3x" onClick={()=>this.show('modal1')}/>
              <p>LinkedIn</p>
            </div>
            <div className = "Item">
              <a href="http://www.imkhem.com" target="_blank"><FA name="user" size="3x"/>
              <p>Portfolio</p></a>
            </div>
            <div className = "Item">
              <a href="https://www.canva.com/design/DACfXYz8Azo/_egtGmpKv1tEMn5pgrE9ag/edit" target="_blank"><FA name="file" size="3x"/>
              <p>Resume</p></a>
            </div>
          </div> */}

          {/* <Modal open={this.open} onClose={this.close}>
            <Modal.Header>
              Modal 1
            </Modal.Header>
            <Modal.Action>
              <button onClick={() => this.close()}>close</button>
            </Modal.Action>
          </Modal> */}
      </div>
    )
  }

}

function Applied(props){
  return(
    <div className = "Applied">

      <h1>Jobs</h1>

      <ul>
        <li>Rebecca Taylor</li>
        <li>GoldenComm</li>
        <li>OverStocked</li>
        <li>Domo</li>
        <li>JJUMPP</li>
        <li>Pure Storage</li>
      </ul>

    </div>
  )
}

class DashBoard extends Component {
  constructor(props){
    super(props)

    this.state = {
      weather: [],
      date: null
    }

  }

  componentWillMount(){

    let date = new Date()

    axios(`https://api.weatherbit.io/v1.0/current/postal?country=US&postal_code=84044&units=I&key=944c3712d18a40ec94d1c4f765a6cfcf`)
      .then(json => {
        this.setState({
          weather: json.data.data[0]
        })
      })
      .catch( err => console.log(err))

    this.setState({
      date: date
    })
  }

  render(){

    console.log("weather", this.state.weather.weather)
    // console.log("description", this.state.weather.weather)

    return(

      <div className = "DashBoard">
        <h1>DashBoard</h1>
        {/* <div className = "Top">
          <div className = "TopLeft">
            <Essentials  />
            <Applied  />
          </div>
          <Forcast 
            temperature={this.state.weather.temp}
            description={this.state.weather.weather} 
            date={this.state.date}
          />
        </div>

        <Goals /> */}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashBoard);
