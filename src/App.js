import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
    "Buenos Aires,ar",
    "Bogota,co",
    "Caracas,ve",
    "Ciudad de México,mx",
    'Madrid,es',
    "Lima,pe",
    'Washington,us',
];

class App extends Component {

    handleSelectionLocation = city => {
        console.log(`handleSelectionLocation ${city}`);
    };

    render() {
        return (
            <Grid>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities={cities}
                            onSelectedLocation={this.handleSelectionLocation}>
                        </LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                <ForecastExtended></ForecastExtended>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;