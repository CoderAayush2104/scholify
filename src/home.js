import React, { Component } from 'react'
import {
    BarChart1,
    BarChart2,
    BarChart3,
    BarChart4,
    BarChart5,
    BarChart6
  } from "./components/BarChart.tsx";

class home extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <BarChart1 />
    </div>
    <div className="container">
      <BarChart2 />
    </div>
    <div className="container">
      <BarChart3 />
    </div>
    <div className="container">
      <BarChart4 />
    </div>
    <div className="container">
      <BarChart5 />
    </div>
    <div className="container">
      <BarChart6 />
    </div>
    </div>
    )
  }
}

export default home