import React, { Component } from 'react';
import './component_styles.scss';

class PaginationComponent extends Component {
  constructor() {
    super();

    this.state = {
      pageList: [],
      current_page: 1,
      total_pages: 0
    }

    this.changePage = this.changePage.bind(this);

  }

  changePage(e) {
    const { current_page } = this.state;
    console.log('The current page is : ', current_page);
  }

  componentDidMount() {
    const { currentPage, itemsPerPage, changePage, totalItems, totalPages } = this.props;
    const { pageList } = this.state;
    this.setState({
      pageList: [1, 2, '...', totalPages-1, totalPages]
    });
  }

  componentDidUpdate(previousProps, previousState) {
    const { pageList } = this.state;
    if (previousProps.totalItems !== this.props.totalItems) {
      let pages = Math.ceil(this.props.totalItems/5);
      let page_array = [];

      if(pages > 5) {
        page_array = [1, 2, '...', pages-1, pages];
      }
      else {
        for(let i=0; i<pages; i++)
          page_array.push(i+1);
      }

      this.setState({
        pageList: page_array
      })
    }
  }

  render() {
    const { currentPage, itemsPerPage, totalItems, paginateChange, changePage, totalPages } = this.props;
    const { pageList, current_page } = this.state;
    return (
      <div className="container">
        <p>Pagination component {currentPage} - {itemsPerPage} </p>

        <div className="button_container">
          <button className="button" data-role="prev" onClick={(e) => {changePage(e)}}>Previous</button>
          {totalItems} - {totalPages}
          {pageList.map((item, index) => {
            return (
              <button key={index} value={item} className="button" onClick={(e) => paginateChange(e)}>{item}</button>
            )
          })}
          <button className="button" data-role="next" onClick={(e) => {changePage(e)}}>Next</button>
        </div>
        <div className="columns">
          <div className="column">
            <label htmlFor="page_number">Enter Page Number</label>
          </div>
          <div className="column is-two-thirds">
            <div className="control">
              <input className="input is-primary" type="number" placeholder="Go to page number" onChange={(e) => {this.changePage(e)}}/>
            </div>
          </div>
          <div className="column">
            <button className="button" value={current_page} onClick={(e) => paginateChange(e)}>Go to Page</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationComponent;