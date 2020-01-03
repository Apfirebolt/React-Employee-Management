import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      dataLoaded: true,
      error_text: '',
      search_text: ''
    }
    this.searchText = this.searchText.bind(this);
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

  searchText(e) {
    const { search_text } = this.state;
    this.setState({
      search_text: e.target.value,
    });
  }

  render() {
    const { dataLoaded, apiData, search_text } = this.state;
    let filteredData = apiData.filter((item) => {
      return item.first_name.indexOf(search_text) !== -1;
    });

    // Sort by last name
    // let sortedResult = apiData.sort((a, b) => {
    //   if(a.last_name < b.last_name) { return -1; }
    //   if(a.last_name > b.last_name) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by First Name
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.first_name < b.first_name) { return -1; }
    //     if(a.first_name > b.first_name) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by Company Name
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.company_name < b.company_name) { return -1; }
    //     if(a.company_name > b.company_name) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by City
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.city < b.city) { return -1; }
    //     if(a.city > b.city) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by state
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.state < b.state) { return -1; }
    //     if(a.state > b.state) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by ZipCode
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.zip < b.zip) { return -1; }
    //     if(a.zip > b.zip) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by Email
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.email < b.email) { return -1; }
    //     if(a.email > b.email) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort By Web
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.web < b.web) { return -1; }
    //     if(a.web > b.web) { return 1; }
    //     return 0;
    //   }
    // );

    // Sort by Age
    // let sortedResult = apiData.sort((a, b) => {
    //     if(a.age < b.age) { return -1; }
    //     if(a.age > b.age) { return 1; }
    //     return 0;
    //   }
    // );

    if(dataLoaded) {
      return (
        <div>
          <div className="field">
            <label className="label"><i className=""></i>Enter Name to search! {search_text}</label>
            <div className="control">
              <input className="input" type="text" onChange={(e) => {this.searchText(e)}} placeholder="Text input" />
            </div>
          </div>

          <table className="table">
            <thead>
            <tr>
              <th>SN</th>
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
            {filteredData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td><Link to="/employee" >{item.id}</Link></td>
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

