import React, { Component } from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class EventsListChart extends Component {
    filterLowFunc = () => {
      const {events} = this.props
      let filteredLow = events.filter(event => (event.fraud_probability >= 0 && event.fraud_probability <= .33))
      console.log('LOW risk >>> ', filteredLow.length);
      return filteredLow.length
    }
    filterMediumFunc = () => {
      const {events} = this.props
      let filteredMedium = events.filter(event => (event.fraud_probability >= 0.34 && event.fraud_probability <= .66))
      console.log('MEDIUM risk >>> ', filteredMedium.length);
      return filteredMedium.length
    }
    filterHighFunc = () => {
      const {events} = this.props
      let filteredHigh = events.filter(event => (event.fraud_probability >= 0.67 && event.fraud_probability <= 1))
      console.log('HIGH risk >>> ', filteredHigh.length);
      return filteredHigh.length
    }

  render(){
    const data = [
      ["Event", "risk level"],
      ["High", this.filterHighFunc()],
      ["Medium", this.filterMediumFunc()],
      ["Low", this.filterLowFunc()],
    ];
    const options = {
      title: "Risk Prediction",
      pieHole: 0.4,
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      is3D: true
    };

    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
         />
      </div>
    );
  };
}
export default EventsListChart;
