import React, { Component } from 'react';
import Header from './Components/Header'
import EventsList from './Components/EventsList'
import Footer from './Components/Footer'
import EventsListChart from './Components/EventsListChart'
import Modal from './Components/Modal'

class App extends Component {
  state = {
    events: [],
    selectedEvent: null
  }

  // AJAX to initally set state:
  componentDidMount = async() => {
    await this.getDataFromAPI()
  }

  getDataFromAPI = async() => {
    // fetch the events
    const eventsJSON = await fetch('http://ec2-54-91-86-14.compute-1.amazonaws.com:3333/events')
    let events = await eventsJSON.json()
    console.log('events jSON from server >>>', events)

    // then set the state
    this.setState({events})
  }

  onclick = (event) => {
    console.log("onclick app.js")
    this.setState({
      selectedEvent: event
    })
  }

  render() {
    const {events, selectedEvent} = this.state;

    return (
      <div className="App">
        <Header />
        <EventsListChart />
        <EventsList events={events} onclick={(event) => this.onclick(event)}/>
        <Footer />
        <Modal event={selectedEvent}/>
      </div>
    );
  }
}

export default App;
