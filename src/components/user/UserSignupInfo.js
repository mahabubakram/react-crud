import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import FormFieldGroup from "../common/form-elements/FormFieldGroup";
import TimezoneDropdown from "../common/TimezoneDropdown";

class UserSignupInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: this.props.actions.updateUserSignupForm
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <h2>User Information:</h2>
                        <hr/>
                        <form>
                            <FormFieldGroup
                                id="inputUserEmail"
                                indicator="email"
                                type="email"
                                label="Email Address"
                                placeholder="user@domain.com"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputUserFirstName"
                                indicator="firstname"
                                type="text"
                                label="First Name"
                                placeholder="John"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputUserLastName"
                                indicator="lastname"
                                type="text"
                                label="Last Name"
                                placeholder="Doe"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Language</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="de">Deutsch</option>
                                    <option value="en">English</option>
                                </FormControl>
                            </FormGroup>

                            <FormFieldGroup
                                id="inputUserPhone"
                                indicator="phone"
                                type="text"
                                label="Phone"
                                placeholder="089123456"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <TimezoneDropdown
                                label="Language"
                                id="inputUserLanguage"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

UserSignupInfo.propTypes = {
    reducedObject: PropTypes.object.isRequired,
    actions: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default UserSignupInfo;
