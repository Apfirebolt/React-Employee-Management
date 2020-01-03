import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      dataLoaded: true,
      error_text: ''
    }
    this.loadAPIData = this.loadAPIData.bind(this);
  }

  componentDidMount() {
    this.loadAPIData();
  }

  loadAPIData() {
    const { dataLoaded, apiData } = this.state;
    let url = 'https://cors-anywhere.herokuapp.com/https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
    this.setState({dataLoaded: false});
    axios.get(url)
      .then((response) => {
        console.log('Response data : ', response.data);
        this.setState({
          apiData: response.data,
          dataLoaded: true
        })
      })
      .catch((err) => {
        console.log('There was some error : ', err);
      })
  }

  render() {
    const { dataLoaded, apiData } = this.state;

    if(dataLoaded) {
      return (
        <div>
          <p className="subtitle">Data is now loaded!</p>

          <table className="table">
            <thead>
            <tr>
              <th><abbr title="id">SN</abbr></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
              <th>City</th>
              <th>State</th>
              <th>ZIP</th>
              <th>Email</th>
              <th>Web</th>
              <th>Age</th>
            </tr>
            </thead>

            <tbody>
            {apiData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.company_name}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zip}</td>
                  <td>{item.email}</td>
                  <td>{item.web}</td>
                  <td>{item.age}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      )
    }
    else {
      return (
        <div className="spinner_container">
          <Loader
            type="Puff"
            color="indianred"
            height={300}
            width={300}
          />
        </div>
      )
    }
  }
}

export default HomePage;

