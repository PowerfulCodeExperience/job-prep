import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import {postProfile, postGoal} from '../../ducks/reducer';

import '../Profile/Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linked: this.props.user.linked,
            resume: this.props.user.resume,
            portfolio: this.props.user.portfolio,
            goal: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
      }
    
      handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({
          [name]: value
        })
      }
      handleSubmit(event) {
        event.preventDefault();
        this.props.postProfile(this.state);
      }
      handleGoalSubmit(event) {
        event.preventDefault();
        this.props.postGoal(this.state.goal);
        this.setState({
          goal: ''
        })
      }

      render() {
          const {linked, resume, portfolio} = this.state

          return (
              <div className="profile_wrapper">
                  <div className="form">
                  <div className="form-group">
                    <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Url's</label>
                        <p className="form_sub">(psssttt...use <a href="https://bitly.com/" className="bit" target='_blank' rel="noopener noreferrer">bit.ly</a> to shorten the link)</p>
                        <br/>
                        <br/>
                        <div className="input-group">
                        <span className="input-group-addon">LinkedIn</span>

                        <input 
                        type="text"
                        name="linked"
                        className="form-control"
                        value={linked}
                        onChange={this.handleChange}
                        />
                    </div>
                   </div>
                   <div className="form-group">
                        <br/>
                        <div className="input-group">
                        <span className="input-group-addon">Resume</span>
                        <input
                        type="text"
                        name="resume"
                        className="form-control"
                        value={resume}
                        onChange={this.handleChange}
                         />
                    </div>
                    </div>
                    <div className="form-group">
                        <br/>
                        <div className="input-group">
                        <span className="input-group-addon">Portfolio</span>
                        <input 
                        type="text"
                        name="portfolio"
                        className="form-control"
                        value={portfolio}
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
                    <br/>
                        <Button type='submit' value='submit'>Submit</Button>
                    </form>
                    <br/>
                    <span>Add a Goal</span>
                    <p className="form_sub">Goals will display on your <Link to="/">Dashboard</Link></p>
                    <br/>
                    <div className="input-group">
                    <span className="input-group-addon">Goal</span>
                    <input 
                        type='text'
                        name='goal'
                        onChange={this.handleChange} 
                        value={this.state.goal}
                        className="form-control"
                        />
                    </div>
                    <br/>
                    <Button disabled={!this.state.goal} onClick={this.handleGoalSubmit} size="tiny">
                            <Button.Content visible>
                            </Button.Content>
                              <Button.Content>Add</Button.Content>
                           </Button>
                </div>
                </div>
                    <div className="rendered_url">
                        <p>
                            <Link to="/companies"><h2 id="teach_header">20 Company Challenge Instructions</h2></Link>
                            <br/>
                            <h3 className="step_headers">Step 1</h3>
                            <p className="para_steps">Search LinkedIn for companies
                                you want to work for.
                            </p>
                            <br/>
                            <h3 className="step_headers">Step 2</h3>
                            <p className="para_steps">Search that company for tech related 
                                people who you can connect with and ask to connect with them.
                            </p>
                            <br/>
                            <h3 className="step_headers">Step 3</h3>
                            <p className="para_steps">Enter the company
                                and contact information in the 20
                                Company Challenge provided inputs.
                            </p>
                            <br/>
                            <h3 className="step_headers">Step 4</h3>
                            <p className="para_steps">Once you are connected with the person
                                on LinkedIn, add their email to the 
                                contacts card.
                            </p>
                            <br/>
                            <p className="para_steps">*Remember, make connections before 
                                making requests.
                                <span>"Focus on friendships and the opportunities
                                will follow."  - Meghan Barber, DevMountain Employment Specialist
                                </span>
                            </p>
                        </p> 
                    </div>
                    
              
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
    export default connect(mapStateToProps, {postProfile, postGoal})(Profile)