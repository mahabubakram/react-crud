import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";

/*const handleChange = (value) =>{
    console.log(this);
    console.log(value.target.value);
}*/

/*const FormFieldGroup = ({id, label, help, value, ...props}) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} value={value} onChange={handleChange.bind(value)}/>
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);*/


class FormFieldGroup extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        if(event.target !== undefined && event.target.value !== undefined) {
            this.state = {[this.props.indicator] : event.target.value};
            this.props.actions(this.state);
        }
    }

    render(){
        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl placeholder={this.props.placeholder} type={this.props.type} value={this.props.value[this.props.indicator]} onChange={this.handleChange} />
                {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
            </FormGroup>
        );
    }

}

FormFieldGroup.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    actions: PropTypes.func.isRequired,
    help: PropTypes.string,
    props: PropTypes.object
};

export default FormFieldGroup