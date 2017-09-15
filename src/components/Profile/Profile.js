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
                  <div className="profile-header">
                    {/* <img src={this.props.user.picture} className={this.props.user.id?"ProfileImage":null} alt=""/> */}
                    Profile
                  </div>
                  <div className="form">
                  <div className="form-group">
                    <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label id="teach_header">URL's</label>
                        <p className="form_sub">These will be displayed on your <Link to="/" className="dash_link">Dashboard</Link></p>
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
                        <Button size="medium" inverted type='submit' value='submit'>SUBMIT</Button>
                    </form>
                    <br/>
                    <label id="teach_header">Add a Goal</label>
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
                    <Button size="medium" inverted disabled={!this.state.goal} onClick={this.handleGoalSubmit}>
                            <Button.Content visible>
                            </Button.Content>
                              <Button.Content>ADD</Button.Content>
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
                            <br/><br/><br/><br/>
                            <p className="para-italic">* Remember, make connections before 
                                making requests. <br/><br/>
                                <span className="para-italic">"Focus on friendships and the opportunities
                                will follow." <br/>
                                <span className="para-italic indent"> - Meaghan Barber, DevMountain Employment Specialist</span>
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