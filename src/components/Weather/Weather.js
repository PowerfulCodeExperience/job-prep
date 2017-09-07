import React, { Component } from 'react'
import '../../ducks/reducer'
import { getWeather } from '../../ducks/reducer'
import {connect} from 'react-redux';

class Weather extends Component {
    componentDidMount() {
        return this.props.getWeather()
    }
    render() {
        console.log('weather', this.props)
        
        const {
            weather
        } = this.props
        return (
            <div>
                <p>{weather.city_name}</p>
                {/* {
                    weather.data.map((e, i) => 
                    (
                        <p key={i}>{e.clouds}</p>
                    )
                    )
                } */}
                   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state in weatherjs', state)
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {getWeather})(Weather)
