import React, {Component} from "react";
import {Link} from "react-router";

class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.keyword.value);
  }

  render() {
    return (
      <div className="col-md-12">

        <div className="card">
          <div className="card-header">
            Search
          </div>

          <div className="card-block">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <fieldset>
                 <div className="form-group">
                   <label htmlFor="keyword">What do you want to look for?</label>
                   <input value={this.state.value} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="keyword" aria-describedby="search-keyword" placeholder="Enter a search term" required />
                 </div>
                 <div className="form-group">
                   <label htmlFor="startYear">Search from a certain year (optional)</label>
                   <input type="date" className="form-control" id="startYear" aria-describedby="start-year" placeholder="Enter a start year" />
                 </div>
                 <div className="form-group">
                   <label htmlFor="endYear">Search for before a certain year (optional)</label>
                   <input type="date" className="form-control" id="endYear" aria-describedby="end-year" placeholder="Enter an end year" />
                 </div>
                 <button type="submit" className="btn btn-primary">Submit</button>
               </fieldset>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

module.exports = Search;
