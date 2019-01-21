import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";

import getUrlWeatherByCity from './../../services/gerUrlWeatherByCity'
import transformWeather from '../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';



class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(data => {

            return data.json()

        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });

        });

    }
    render() {
        const { onWeatherLocationClick } = this.props
        const  { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ?
                    <WeatherData data={data} ></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    };
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;