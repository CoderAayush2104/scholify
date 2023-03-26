import React, { Component } from 'react'
import { Workflow } from './components/workflow';
import "./App.css";
import {
    BarChart1,
    BarChart2,
    BarChart3,
    BarChart4,
    BarChart5,
    BarChart6
  } from "./components/BarChart.tsx";

class home extends Component {
    
  render()
  
  {
    // window.onscroll = function() {myFunction()};

// Get the header

// Get the offset position of the navbar

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
    return (
       <>
        <div class="header" id="myHeader">
  <h2>Scholify</h2>
</div>
      <div className='container'>
            <Workflow/>
    
        </div>
      <div className="container">
<h2> <b>Campaign</b>- Views w.r.t time</h2>
      <BarChart1 />
    </div>
    <div className="container">
    <h1><b>Across Campaigns</b> of Company - Views vs Time</h1>
      <BarChart2 />
    </div>
    <div className="container">
        
<h2> Success rate of Campaign</h2>
      <BarChart3 />
    </div>
    <div className="container">
        <h2>Campaign views over regions</h2>
      <BarChart4 />
    </div>
    <div className="container">
        <h2>Historical analysis</h2>
      <BarChart5 />
    </div>
    <div className="container">
        <h1>Analyzing regions of drop off</h1>
      <BarChart6 />
    </div>
    
    </>
    )
  }
}

export default home;


