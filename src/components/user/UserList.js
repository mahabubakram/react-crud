import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";

class UserList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container-fluid jumbotron">
                <h4>This is user list</h4>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User Email</th>
                        <th>User Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((x, i) =>
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{x.email}</td>
                            <td>{x.type}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;
