import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import {postProfile, getProfile} from '../../ducks/reducer';

import '../Profile/Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linked: '',
            resume: '',
            portfolio: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
    
      componentDidMount(){
        this.props.getProfile();
      }
    
      handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({
          [name]: value
        })
      }
      handleSubmit(event) {
        const {linked, resume, portfolio} = this.state
        event.preventDefault();
        this.props.postProfile(linked, resume, portfolio);
        this.setState({
          linked,
          resume,
          portfolio
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
                        <p className="form_sub">(psssttt...use <a href="https://bitly.com/" className="bit"target='_blank'>bit.ly</a> to shorten the link)</p>
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
                        <Button type='submit'>Submit</Button>
                    </form>
                </div>
                </div>
                    <div className="rendered_url">
                        Rendered List here 
                    </div>
              </div>
          )
      }


    }

    function mapStateToProps(state) {
        return {
            user: state.user,
            goals: state.goals,
            profile: state.profile
        }
}
    export default connect(mapStateToProps, {postProfile, getProfile})(Profile)