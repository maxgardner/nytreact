import React, {Component} from "react";

class Saved extends Component {
  constructor() {
    super();
    this.renderContent.bind(this);
  }

  renderContent() {
    if (this.props.results.length === 0) {
      return (
        <p className="text-center">You haven't saved anything yet! Click the <span className="badge badge-default">&hearts;</span> next to an article to save it for later</p>
      )
    }
    return (
      this.props.results.map((result, i) => (
        <div className="well">
          <div className="row">
            <div className="col-sm-1 text-center">
              <h5><span className="badge badge-success">{i + 1}</span></h5>
              <h5><span className="badge badge-default">&hearts;</span></h5>
            </div>

            <div className="col-sm-11">
              <h3>{result.headline.main}</h3>
              <h5>{result.headline.kicker}</h5>
              <p>{result.snippet}</p>
              <p><a href={result.web_url} target="_blank">Continue Reading</a></p>
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
        Saved results hur
      </div>
    )
  }
}

module.exports = Saved;
