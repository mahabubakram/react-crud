import React from 'react';
import * as userActions from "../actions/userActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import UserList from "../components/user/UserList";

class UserListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount(){
        console.log(this.props);
        if(!(this.props.users instanceof Array) || (this.props.users.length === 0)){
            this.props.userActions.loadUsers();
        }
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container-fluid jumbotron">
                <h3>This is UserList Viewer</h3>
                <UserList users={this.props.users}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.userListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {userActions: bindActionCreators(userActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
