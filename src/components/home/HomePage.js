import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Lanxess Miraculix Marketplace</h1>
        <p>the best way to manage the products in Marketplace</p>
        <Link to="registration" className="btn btn-primary btn-lg">Register first</Link>
      </div>
    );
  }
}

export default HomePage;