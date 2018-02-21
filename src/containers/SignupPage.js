import React from 'react';
import * as userActions from "../actions/userActions";
import * as companyActions from "../actions/companyActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import CompanySignupInfo from "../components/company/CompanySignupInfo";
import UserSignupInfo from "../components/user/UserSignupInfo";

class SignupPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            saving: false
        };
        this.submitSignupInfo = this.submitSignupInfo.bind(this);
    }

    submitSignupInfo(event) {
        event.preventDefault();
        console.log(this.props);
        alert('Hallo! form is submitted');
    }

    render() {
        return (
            <div className="container-fluid jumbotron">
                <h2>This is Signup Page for User</h2>
                <UserSignupInfo
                    reducedObject={this.props.user}
                    saving={this.state.saving}
                    actions={this.props.userActions}
                />

                <CompanySignupInfo
                    reducedObject={this.props.company}
                    saving={this.state.saving}
                    actions={this.props.companyActions}
                    onSubmit={this.submitSignupInfo}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        company: state.company
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        companyActions: bindActionCreators(companyActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
