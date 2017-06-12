import React, {Component} from "react";

class Results extends Component {
  constructor() {
    super();
    this.renderContent.bind(this);
  }

  renderContent() {
    if (this.props.results.length === 0) {
      return (
        <p className="text-center">No results yet. Use the form above to search.</p>
      )
    }
    return (
      this.props.results.map((result, i) => (
        <div key={result.id} className="well">
          <div className="row">
            <div className="col-sm-1 text-center">
              <h5><span className="badge badge-success">{i + 1}</span></h5>
              <h5><span className="badge badge-default">&hearts;</span></h5>
            </div>

            <div className="col-sm-11">
              <h3>{result.headline.main}</h3>
              <h5>{result.headline.kicker}</h5>
              <p className="italic">Published {result.pub_date.split("T")[0]}</p>
              <p>{result.snippet}</p>
              <p><a href={result.web_url} target="_blank">Read More</a></p>
            </div>
          </div>
        </div>
        )
      )
    )
  }

  render() {
    return(
      <div className="card-block">
        {this.renderContent()}
      </div>
    )
  }
}

module.exports = Results;
