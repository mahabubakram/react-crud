import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import FormFieldGroup from "../common/form-elements/FormFieldGroup";

class CompanySignupInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: this.props.actions.updateCompanySignupForm
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
                        <h2>Company Information:</h2>
                        <hr/>
                        <form>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Language</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="de">Deutsch</option>
                                    <option value="en">English</option>
                                </FormControl>
                            </FormGroup>

                            <FormFieldGroup
                                id="inputCompanyName"
                                indicator="name"
                                type="text"
                                label="Name"
                                placeholder="Lanxess Bypass Medical"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputCompanyEmail"
                                indicator="email"
                                type="email"
                                label="Email Address"
                                placeholder="abc@def.com"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputCompanyPhone"
                                indicator="phone"
                                type="text"
                                label="Company Phone"
                                placeholder="089123456"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputCompanyFax"
                                indicator="fax"
                                type="text"
                                label="Fax"
                                placeholder="0089123456789"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                id="inputCompanyWebsite"
                                indicator="website"
                                type="url"
                                label="website"
                                placeholder="www.lanxess.de"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <button type="submit" onClick={this.props.onSubmit} className="btn btn-default">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

CompanySignupInfo.propTypes = {
    reducedObject: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    saving: PropTypes.bool,
    onSubmit: PropTypes.func
};

export default CompanySignupInfo;
