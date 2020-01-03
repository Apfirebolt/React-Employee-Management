import React, { Component } from 'react';

class EmployeeDetailPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <p>John Cena</p>
        </div>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            <p>Company</p>
            <p>City</p>
            <p>State</p>
            <p>Zip</p>
            <p>Email</p>
            <p>Web</p>
            <p>Age</p>
          </div>
        </div>
        <footer className="card-footer">
        </footer>
      </div>
    )
  }
}

export default EmployeeDetailPage;

