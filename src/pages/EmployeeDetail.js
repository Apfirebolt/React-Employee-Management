import React, { Component } from 'react';
import './page_styles.scss';

import Navbar from '../components/Navbar';

class EmployeeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      company: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      web: '',
      age: ''
    }
  }

  componentDidMount() {
    let obj_detail = this.props.history.location.state.detail;
    this.setState({
      first_name: obj_detail.first_name,
      last_name: obj_detail.last_name,
      company: obj_detail.company_name,
      city: obj_detail.city,
      state: obj_detail.state,
      zip: obj_detail.zip,
      email: obj_detail.email,
      web: obj_detail.web,
      age: obj_detail.age
    })
  }

  render() {
    const { first_name, last_name, company, city, state, zip, email, web, age } = this.state;
    return (
      <div>
        <Navbar detail_page={true} />
        <div className="card">
          <div className="card-header">
            <p>{first_name} {last_name}</p>
          </div>
          <div className="card-content">
            <div className="content">

              <div className="detail_container">
                <p>Company</p>
                <p>{company}</p>
              </div>

              <div className="detail_container">
                <p>City</p>
                <p>{city}</p>
              </div>

              <div className="detail_container">
                <p>State</p>
                <p>{state}</p>
              </div>

              <div className="detail_container">
                <p>Zip</p>
                <p>{zip}</p>
              </div>

              <div className="detail_container">
                <p>Email</p>
                <p>{email}</p>
              </div>

              <div className="detail_container">
                <p>Web</p>
                <p>{web}</p>
              </div>

              <div className="detail_container">
                <p>Age</p>
                <p>{age}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeDetailPage;

