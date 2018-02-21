import React from 'react';
import {Link} from "react-router-dom";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Lanxess Miraculix Marketplace</h1>
        <p>the best way to manage the products in Marketplace</p>
        <Link to="/" className="btn btn-primary btn-lg">Return to Home</Link>
      </div>
    );
  }
}

export default AboutPage;