import React from 'react';
import PropTypes from 'prop-types';
import FormFieldGroup from "../common/form-elements/FormFieldGroup";

class UserSignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: this.props.actions.updateUserSignInForm
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        //this.state = {'type': event.target.value};
        this.setState({'type': event.target.value});
        this.state.actions(this.state);
    }

    render() {
        return (
            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <form>
                            <FormFieldGroup
                                id="inputEmail"
                                indicator="email"
                                type="email"
                                label="Email Address"
                                placeholder="user@domain.com"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

                            <FormFieldGroup
                                indicator="password"
                                id="inputPassword"
                                type="password"
                                label="Password"
                                placeholder="********"
                                value = {this.props.reducedObject}
                                actions = {this.state.actions}
                            />

{/*                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>User Type</ControlLabel>
                                <FormControl componentClass="select" placeholder="select" value={this.props.reducedObject.type} onChange={this.handleChange}>
                                    <option value="seller">Seller</option>
                                    <option value="buyer">Buyer</option>
                                </FormControl>
                            </FormGroup>*/}

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

UserSignInForm.propTypes = {
    reducedObject: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    saving: PropTypes.bool
};

export default UserSignInForm;
