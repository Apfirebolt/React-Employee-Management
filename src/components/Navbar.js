import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends Component {
  constructor(props) {
    super();

  }
  componentDidMount() {
    console.log('The props are : ', this.props.history);
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav_icon">
          <p><i className="fa fa-backward"></i>Icon Container</p>
        </div>
        <div className="navbar-brand">
          <p className="is-size-3 has-text-centered">DataPeace</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;