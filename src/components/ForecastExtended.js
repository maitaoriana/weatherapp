import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './styles.css';
import {api_key, url_forecast} from "../constants/api_url";
import transformForecast from '../services/transformForecast';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: '10 m/s',
};
*/
class ForecastExtended extends Component{

    constructor() {
        super();
        this.state = { forecastData: null }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    updateCity  = city => {
        const url = `${url_forecast}?q=${city}&appid=${api_key}`;
        fetch(url).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        )
    };

    renderForescastItemDays(forescastData) {
       return forescastData.map( forecast => (
           <ForecastItem
               key={`${forecast.weekDay}${forecast.hour}`}
               weekDay={forecast.weekDay}
               hour={forecast.hour}
               data={forecast.data}>
           </ForecastItem>));
    }

    renderProgress(){
        return <h3>"Cargando Pronostico extendido.."</h3>;
    };

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='forecast-title'> Pronostico Extendido para { city }</h2>
                {forecastData ?
                    this.renderForescastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        );
    }
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;