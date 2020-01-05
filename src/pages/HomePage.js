import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';

import PaginationComponent from '../components/PaginationComponent';

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
      search_text: '',
      current_page: 1,
      itemsPerPage: 5,
      totalPages: 0
    }
    this.searchText = this.searchText.bind(this);
    this.sortResults = this.sortResults.bind(this);
    this.loadAPIData = this.loadAPIData.bind(this);
    this.goToDetail = this.goToDetail.bind(this);
    this.changePage = this.changePage.bind(this);
    this.paginateChange = this.paginateChange.bind(this);
  }

  componentDidMount() {
    this.loadAPIData();
  }

  goToDetail(e, id) {
    const { history } = this.props;
    const { apiData } = this.state;

    let current_data = apiData[id-1];
    history.push(`/user/${id}`, { detail: current_data });
  }

  loadAPIData() {
    const { dataLoaded, apiData } = this.state;
    let url = 'https://cors-anywhere.herokuapp.com/https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
    this.setState({dataLoaded: false});
    axios.get(url)
      .then((response) => {

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
    const { search_text, current_page } = this.state;
    if(!search_text)
    {
      this.setState({
        current_page: 1
      })
    }
    this.setState({
      search_text: e.target.value,
    });
  }

  changePage(e) {
    let { current_page, apiData, search_text } = this.state;
    let page_type = e.target.getAttribute("data-role");
    let filteredData = apiData.filter((item) => {
      return item.first_name.indexOf(search_text) !== -1;
    });
    let max_pages = Math.ceil(filteredData.length/5);
    if(page_type === 'prev') {
      if(current_page <= 1)
        current_page = 1;
    }

    if(page_type === 'next') {
      if(current_page >= max_pages)
        return false;

      current_page = parseInt(current_page) + 1;
    }

    this.setState({
      current_page: current_page
    });
  }

  paginateChange(e) {
    const { current_page } = this.state;
    let page = e.target.value;
    if(!page) {
      return false;
    }
    if(page === '...')
    {
      return false;
    }
    this.setState({
      current_page: page
    });
  }

  sortResults(event) {
    const { search_text, apiData } = this.state;
    const choice = event.target.getAttribute("data-role");
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
    const { dataLoaded, apiData, search_text, current_page, itemsPerPage, totalPages } = this.state;

    const indexofLastPost = current_page * itemsPerPage;
    const indexofFirstPost = indexofLastPost - itemsPerPage;

    let filteredData = apiData.filter((item) => {
      return item.first_name.indexOf(search_text) !== -1;
    });

    const currentPosts = filteredData.slice(indexofFirstPost, indexofLastPost);

    if(dataLoaded) {
      return (
        <div>
          <div className="field">
            <label className="label"><i className=""></i>Enter Name to search!</label>
            <div className="control">
              <input className="input" type="text" onChange={(e) => {this.searchText(e)}} placeholder="Text input" />
            </div>
          </div>

          <table className="table">
            <thead>
            <tr>
              <th data-role="sn" onClick={(e) => {
                this.sortResults(e)
              }}>SN <i className="fa fa-angle-down"></i></th>
              <th data-role="firstName" onClick={(e) => {
                this.sortResults(e)
              }}>First Name<i className="fa fa-angle-down"></i></th>
              <th data-role="lastName" onClick={(e) => {
                this.sortResults(e)
              }}>Last Name<i className="fa fa-angle-down"></i></th>
              <th data-role="company" onClick={(e) => {
                this.sortResults(e)
              }}>Company<i className="fa fa-angle-down"></i></th>
              <th data-role="city" onClick={(e) => {
                this.sortResults(e)
              }}>City<i className="fa fa-angle-down"></i></th>
              <th data-role="state" onClick={(e) => {
                this.sortResults(e)
              }}>State<i className="fa fa-angle-down"></i></th>
              <th data-role="zip" onClick={(e) => {
                this.sortResults(e)
              }}>ZIP<i className="fa fa-angle-down"></i></th>
              <th data-role="email" onClick={(e) => {
                this.sortResults(e)
              }}>Email<i className="fa fa-angle-down"></i></th>
              <th data-role="web" onClick={(e) => {
                this.sortResults(e)
              }}>Web<i className="fa fa-angle-down"></i></th>
              <th data-role="age" onClick={(e) => {
                this.sortResults(e)
              }}>Age<i className="fa fa-angle-down"></i></th>
            </tr>
            </thead>

            <tbody>
            {currentPosts.map((item, index) => {
              return (
                <tr key={item.id} onClick={(e) => {this.goToDetail(e, item.id)}}>
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
          <PaginationComponent
            currentPage={current_page}
            itemsPerPage={itemsPerPage}
            changePage={this.changePage}
            totalItems={filteredData.length}
            paginateChange={this.paginateChange}
            totalPages={Math.ceil(filteredData.length/5)}
          />
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

