import React, { Component } from 'react';
import axios from 'axios';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    }
    this.loadAPIData = this.loadAPIData.bind(this);
  }

  componentDidMount() {
    this.loadAPIData();
  }

  loadAPIData() {
    console.log('Load API data method called..');
    let url = 'https://cors-anywhere.herokuapp.com/https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';

    axios.get(url)
      .then((response) => {
        console.log('The response is : ', response)
      })
      .catch((err) => {
        console.log('There was some error : ', err);
      })
  }

  render() {
    return (
      <div className="columns">
        <p className="is-size-3">Home Page</p>
      </div>
    )
  }
}

export default HomePage;

