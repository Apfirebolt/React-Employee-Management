import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import './page_styles.scss';
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
    this.sortResults = this.sortResults.bind(this);
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

  sortResults(event) {
    const { search_text, apiData } = this.state;
    const choice = event.target.getAttribute("data-role");
    console.log('Sort results method called..', choice);
    let sortedResult;

    switch(choice) {
      case 'sn':
        sortedResult = apiData.sort((a, b) => {
          if(a.id < b.id) { return -1; }
          if(a.id > b.id) { return 1; }
          return 0;
        });
        break;
      case 'firstName':
        sortedResult = apiData.sort((a, b) => {
          if(a.first_name < b.first_name) { return -1; }
          if(a.first_name > b.first_name) { return 1; }
          return 0;
        });
        break;
      case 'lastName':
        sortedResult = apiData.sort((a, b) => {
          if(a.last_name < b.last_name) { return -1; }
          if(a.last_name > b.last_name) { return 1; }
          return 0;
        });
        break;
      case 'company':
        sortedResult = apiData.sort((a, b) => {
          if(a.company_name < b.company_name) { return -1; }
          if(a.company_name > b.company_name) { return 1; }
          return 0;
        });
        break;
      case 'city':
        sortedResult = apiData.sort((a, b) => {
          if(a.city < b.city) { return -1; }
          if(a.city > b.city) { return 1; }
          return 0;
        });
        break;
      case 'state':
        sortedResult = apiData.sort((a, b) => {
          if(a.state < b.state) { return -1; }
          if(a.state > b.state) { return 1; }
          return 0;
        });
        break;
      case 'zip':
        sortedResult = apiData.sort((a, b) => {
          if(a.zip < b.zip) { return -1; }
          if(a.zip > b.zip) { return 1; }
          return 0;
        });
        break;
      case 'email':
        sortedResult = apiData.sort((a, b) => {
          if(a.email < b.email) { return -1; }
          if(a.email > b.email) { return 1; }
          return 0;
        });
        break;
      case 'web':
        sortedResult = apiData.sort((a, b) => {
          if(a.web < b.web) { return -1; }
          if(a.web > b.web) { return 1; }
          return 0;
        });
        break;
      case 'age':
        sortedResult = apiData.sort((a, b) => {
          if(a.age < b.age) { return -1; }
          if(a.age > b.age) { return 1; }
          return 0;
        });
        break;
    }

    this.setState({
      apiData: sortedResult
    })
  }

  render() {
    const { dataLoaded, apiData, search_text } = this.state;
    let filteredData = apiData.filter((item) => {
      return item.first_name.indexOf(search_text) !== -1;
    });

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
              <th data-role="sn" onClick={(e) => {
                this.sortResults(e)
              }}>SN</th>
              <th data-role="firstName" onClick={(e) => {
                this.sortResults(e)
              }}>First Name</th>
              <th data-role="lastName" onClick={(e) => {
                this.sortResults(e)
              }}>Last Name</th>
              <th data-role="company" onClick={(e) => {
                this.sortResults(e)
              }}>Company</th>
              <th data-role="city" onClick={(e) => {
                this.sortResults(e)
              }}>City</th>
              <th data-role="state" onClick={(e) => {
                this.sortResults(e)
              }}>State</th>
              <th data-role="zip" onClick={(e) => {
                this.sortResults(e)
              }}>ZIP</th>
              <th data-role="email" onClick={(e) => {
                this.sortResults(e)
              }}>Email</th>
              <th data-role="web" onClick={(e) => {
                this.sortResults(e)
              }}>Web</th>
              <th data-role="age" onClick={(e) => {
                this.sortResults(e)
              }}>Age</th>
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

