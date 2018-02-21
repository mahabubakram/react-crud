import React from 'react';
import {Route, Switch} from "react-router-dom";
import AboutPage from "../about/AboutPage";
import HomePage from "../home/HomePage";
import SignupPage from "../../containers/SignupPage";
import UserListPage from "../../containers/UserListPage";
import SignInPage from "../../containers/SignInPage";
import * as axios from "axios";

class Body extends React.Component {
/*    constructor(props) {
        super(props);

        axios.interceptors.response.use(function (response) {
            // Do something with response data
            debugger;
            alert(response.status);
            return response;
        }, function (error) {
            debugger;
            // Do something with response error
            return Promise.reject(error);
        });

    }*/


    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/user-list' component={UserListPage}/>
                <Route path='/signup' component={SignupPage}/>
                <Route path='/login' component={SignInPage}/>
                <Route path='/about' component={AboutPage}/>
            </Switch>
        )
    }
}

Body.propTypes = {};


export default Body;