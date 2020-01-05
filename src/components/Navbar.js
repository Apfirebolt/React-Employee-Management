import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './component_styles.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }
  componentDidUpdate() {
    console.log('The props are : ', this.props);
  }

  componentDidMount() {
    console.log('The props are : ', this.props);
  }
  render() {
    const { detail_page } = this.props;
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        {detail_page && detail_page == true ?
          <Link to="/" className="nav_icon">
            <i className="fa fa-backward"></i>
          </Link>
          :
          null
        }
        <div className="navbar-brand">
          <p className="is-size-3 has-text-centered">DataPeace</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;