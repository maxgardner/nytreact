import React, {Component} from "react";
import {Route, NavLink} from "react-router-dom";

import Search from "./Search";
import Results from "../components/Results";
import Saved from "../components/Saved";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  handleSubmit(data) {
    this.setState({
      results: results.concat(data)
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1>Get Yo'self Read</h1>
            <p>Look through the New York Times' database and save articles</p>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <Search handleClick={this.handleClick} />
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className="nav-link"
                        activeClassName="nav-link active">Results</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/favorites"
                        className="nav-link"
                        activeClassName="nav-link active">Favorited</NavLink>
                    </li>
                  </ul>
                </div>

                <Route path="/" component={Results} />
                <Route path="/favorites" component={Saved} />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;
