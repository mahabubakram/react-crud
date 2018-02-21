import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Body from "./common/Body";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Body/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;