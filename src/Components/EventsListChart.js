import React, { Component } from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";

class EventsListChart extends Component {
  render(){
    const data = [
      ["Event", "risk level"],
      ["High", 13],
      ["Medium", 33],
      ["Low", 49],
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
