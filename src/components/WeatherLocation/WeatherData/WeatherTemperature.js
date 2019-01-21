import React from 'react';
import WeatherIcons from 'react-weathericons'
import {CLOUD, SUN, SNOW, RAIN, THUNDER, DRIZZLE} from "../../../constants/weathers";
import PropTypes from 'prop-types';
import './style.css';

const icons = {
    [SUN]: "day-sunny",
    [RAIN]: 'rain',
    [CLOUD]: "cloud",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
};

const getWeathericon = weatherState => {
    const icon = icons[weatherState] || "day-sunny";
    const sizeIcon = "4x"
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeathericon(weatherState)
        }
        <span className="temperature">{ ` ${temperature}` }</span>
        <span className="temperatureType">{ `C°` }</span>
    </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;