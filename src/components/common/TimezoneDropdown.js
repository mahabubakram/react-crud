import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

const moment = require('moment-timezone');

class TimezoneDropdown extends React.Component{

    constructor(props){
        super(props);
        /** BEGIN: Populate timezones**/
        const timeZones = moment.tz.names();
        let offset = [];
        for(var i in timeZones)
        {
            offset.push(" (GMT"+moment.tz(timeZones[i]).format('Z')+") -- " + timeZones[i]);
        }
        /** END: Populate timezones**/

        this.state = {
            timeOffset : offset
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        if(event.target !== undefined && event.target.value !== undefined) {
            console.log(event.target.value);
        }
    }

    render(){
        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    {this.state.timeOffset.map((x, i) =>
                        <option key={i} value={x}>{x}</option>
                    )}
                </FormControl>
            </FormGroup>
        );
    }

}

TimezoneDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    props: PropTypes.object
};

export default TimezoneDropdown