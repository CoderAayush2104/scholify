import React from 'react'
import "./workflow.css"
import { useState } from 'react'
// 
export const Workflow = () => {
  const [toggleVisibility,setToggleVisibility] = useState(false);
    const [arrow,setArrow] = useState(false);

    function toggleArrow(){
      if(arrow){
        setArrow(false);
        return;
      }
      setArrow(true);

    }
  function toggleswitch(){
    if(toggleVisibility){
      setToggleVisibility(false);
      return;
    }
    setToggleVisibility(true);
  }
  function toggleAnimation(){
    toggleArrow()
    toggleswitch()
    if(!toggleVisibility){
      document.getElementById('box1').classList.add("move1");
    document.getElementById('box2').classList.add("move2");
    document.getElementById('box3').classList.add("move3");
    }else{
      document.getElementById('box1').classList.remove("move1");
    document.getElementById('box2').classList.remove("move2");
    document.getElementById('box3').classList.remove("move3");
    }
    
  }
  function startAnimation(){

  }
  return (
    <>
    <div>Hello</div>
    <div className='box-main' onClick={toggleAnimation}>100</div>
    <div className='box' id="box1"></div>
    <div className='box'id="box2"></div>
    <div className='box'id="box3"></div>
    {/* <button id='button' onClick={toggleArrow}>Click</button> */}
    <div className = {arrow?"" : "hide"}>
  <svg width="315px" height="107px" viewBox="-65 -250 315 107" version="1.1" style={{overflow:'visible'}}>
    
      <path id="Path-1" class="path" fill="none" stroke="#db5862" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" d="m 0 0 c 100 0 100 -75 200 -75"/>

<path class="dashed" fill="none" stroke="white" stroke-width="8" stroke-linejoin="round" stroke-miterlimit="10" d="m 0 0 c 100 0 100 -75 200 -75"/>  
  </svg>
</div>

    </>
  )
}
