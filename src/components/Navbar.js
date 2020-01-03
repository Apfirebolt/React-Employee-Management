import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav_icon">
          <p><i className="fa fa-backward"></i>Icon Container</p>
          <FontAwesomeIcon icon="coffee" />
        </div>
        <div className="navbar-brand">
          <p className="is-size-3 has-text-centered">DataPeace</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;