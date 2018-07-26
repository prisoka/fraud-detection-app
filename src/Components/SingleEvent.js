import React, { Component } from 'react';
// import SingleEventProfile from 'SingleEventProfile';

class SingleEvent extends Component {
  render() {
    console.log(this.props);
    const { event, onclick } = this.props;

    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-5">{event.name}</div>
          <div className="col-md-3">{event.ingest_time_ms}</div>
          <div className="col-md-3">{event.fraud_probability}</div>
          <div>
            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#exampleModalLong" onClick={() => onclick(event)}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
