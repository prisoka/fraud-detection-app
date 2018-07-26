import React, { Component } from 'react';
import SingleEvent from './SingleEvent';

class EventsList extends Component {
  render() {
    console.log(this.props);
    const { events, onclick } = this.props;

    return (
      <div className="container">
        <h1></h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-5"><strong>Name</strong></div>
              <div className="col-md-3"><strong>Ingest time</strong></div>
              <div className="col-md-3"><strong>Fraud probability</strong></div>
            </div>
          </div>
          {events.map((event, i) => {
            return <SingleEvent key={i} event={event} onclick={(event) => onclick(event)}/>;
          })}
        </div>
      </div>
    );
  }
}

export default EventsList;
