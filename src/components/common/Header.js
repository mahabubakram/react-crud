import React from 'react';
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">

                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span
                                    className="icon-bar"></span><span className="icon-bar"></span>
                                </button>
                                <NavLink exact className="navbar-brand active" to="/">Lanxess-Miraculix</NavLink>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <NavLink exact activeclassname="active" to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeclassname="active" to="/about">About</NavLink>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <NavLink activeclassname="active" to="/user-list">Users List</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeclassname="active" to="/signup">Signup</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeclassname="active" to="/login">Login</NavLink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


/*            <nav>
                <NavLink exact activeclassname="active" to="/">Home</NavLink>
                {" | "}
                <NavLink activeclassname="active" to="/registration">Registration</NavLink>
                {" | "}
                <NavLink activeclassname="active" to="/about">About</NavLink>
            </nav>*/
        )
    }
}

Header.propTypes = {};



export default Header;