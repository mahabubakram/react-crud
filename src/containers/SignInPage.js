import React from 'react';
import * as userActions from "../actions/userActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import UserSignInForm from "../components/user/UserSignInForm";

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            saving: false
        };
        this.submitUser = this.submitUser.bind(this);
    }

    submitUser(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.userActions.loginUser(this.props.user);
    }

    render() {
        return (
            <div className="container-fluid jumbotron">
                <h2>This is Login Page for User</h2>
                <UserSignInForm
                    reducedObject={this.props.user}
                    saving={this.state.saving}
                    onSubmit={this.submitUser}
                    actions={this.props.userActions}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {userActions: bindActionCreators(userActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
