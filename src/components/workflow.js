import React from "react";
import "../components/workflow.css";
import { useState } from "react";
//
export const Workflow = () => {
  const [toggleVisibility1, setToggleVisibility1] = useState(false);
  const [arrow1, setArrow1] = useState(false);

  const [toggleVisibility2, setToggleVisibility2] = useState(false);
  const [arrow2, setArrow2] = useState(false);

  const [toggleVisibility3, setToggleVisibility3] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  const [toggleVisibility4, setToggleVisibility4] = useState();
  const [arrow4, setArrow4] = useState(false);

  const [toggleVisibility5, setToggleVisibility5] = useState();
  const [arrow5, setArrow5] = useState(false);

  const [toggleVisibility6, setToggleVisibility6] = useState();
  const [arrow6, setArrow6] = useState(false);

  function toggleArrow1() {
    if (arrow1) {
      setArrow1(false);
      return;
    }
    setArrow1(true);
  }
  function toggleArrow2() {
    if (arrow2) {
      setArrow2(false);
      return;
    }
    setArrow1(true);
  }
  function toggleArrow3() {
    if (arrow3) {
      setArrow3(false);
      return;
    }
    setArrow1(true);
  }
  function toggleArrow4() {
    if (arrow4) {
      setArrow4(false);
      return;
    }
    setArrow4(true);
  }
  function toggleArrow5() {
    if (arrow5) {
      setArrow5(false);
      return;
    }
    setArrow5(true);
  }
  function toggleArrow6() {
    if (arrow6) {
      setArrow6(false);
      return;
    }
    setArrow6(true);
  }
  function toggleswitch1() {
    if (toggleVisibility1) {
      setToggleVisibility1(false);
      return;
    }
    setToggleVisibility1(true);
  }
  function toggleswitch2() {
    if (toggleVisibility2){
      setToggleVisibility2(false);
      return;
    }
    setToggleVisibility2(true);
  }
  function toggleswitch3() {
    if (toggleVisibility3){
      setToggleVisibility3(false);
      return;
    }
    setToggleVisibility3(true);
  }
  function toggleswitch4() {
    if (toggleVisibility4) {
      setToggleVisibility4(false);
      return;
    }
    setToggleVisibility4(true);
  }
  function toggleswitch5() {
    if (toggleVisibility5) {
      setToggleVisibility5(false);
      return;
    }
    setToggleVisibility5(true);
  }
  function toggleswitch6() {
    if (toggleVisibility6) {
      setToggleVisibility6(false);
      return;
    }
    setToggleVisibility6(true);
  }
  function toggleAnimation1() {
    if(!document.getElementById("arrow2").classList.contains("hide")){
      document.getElementById("arrow2").classList.add("hide");
        
    }
    if(!document.getElementById("arrow3").classList.contains("hide")){
      document.getElementById("arrow3").classList.add("hide");
    }
    if(!document.getElementById("arrow4").classList.contains("hide")){
      document.getElementById("arrow4").classList.add("hide");
    }
    toggleArrow1();
    toggleswitch1();
    if (!toggleVisibility1) {
      document.getElementById("box1").classList.add("move1");
      document.getElementById("box2").classList.add("move2");
      document.getElementById("box3").classList.add("move3");
      document.getElementById("box4").classList.add("move4");
      document.getElementById("box5").classList.add("move6");
      document.getElementById("box6").classList.add("move8");
      document.getElementById("box7").classList.add("move11");
      document.getElementById("box8").classList.add("move15");
      document.getElementById("box9").classList.add("move15");
      document.getElementById("box10").classList.add("move15");
    } else {
      document.getElementById("box1").classList.remove("move1");
      document.getElementById("box2").classList.remove("move2");
      document.getElementById("box3").classList.remove("move3");
      document.getElementById("box4").classList.remove("move4");
      document.getElementById("box5").classList.remove("move6");
      document.getElementById("box6").classList.remove("move8");
      document.getElementById("box7").classList.remove("move11");
      document.getElementById("box8").classList.remove("move15");
      document.getElementById("box9").classList.remove("move15");
      document.getElementById("box10").classList.remove("move15");
    }
  }
  function toggleAnimation2() {
    
    if(document.getElementById("arrow2").classList.contains("hide")){
      document.getElementById("arrow2").classList.remove("hide");
    }else{
      document.getElementById("arrow2").classList.add("hide");
    }
    
    toggleswitch2();
    if (!toggleVisibility2 ) {
      document.getElementById("box4").classList.add("move5");
      
    } else {
      document.getElementById("box4").classList.remove("move5");
    }
  }
  function toggleAnimation3() {
    if(document.getElementById("arrow3").classList.contains("hide")){
      document.getElementById("arrow3").classList.remove("hide");
    }else{
      document.getElementById("arrow3").classList.add("hide");
    }
    if(document.getElementById("arrow4").classList.contains("hide")){
      document.getElementById("arrow4").classList.remove("hide");
    }else{
      document.getElementById("arrow4").classList.add("hide");
    }
    
    
    toggleswitch3();
    if (!toggleVisibility3 ) {
      document.getElementById("box5").classList.add("move7");
        document.getElementById("box6").classList.add("move9");
        document.getElementById("box7").classList.add("move12");
        document.getElementById("box8").classList.add("move16");
      document.getElementById("box9").classList.add("move16");
      document.getElementById("box10").classList.add("move16");
    } else {
      document.getElementById("box5").classList.remove("move7");
      document.getElementById("box6").classList.remove("move9");
      document.getElementById("box7").classList.remove("move12");
      document.getElementById("box8").classList.remove("move16");
      document.getElementById("box9").classList.remove("move16");
      document.getElementById("box10").classList.remove("move16");
    }
  
  }
  function toggleAnimation4() {
    if(document.getElementById("arrow5").classList.contains("hide")){
      document.getElementById("arrow5").classList.remove("hide");
    }else{
      document.getElementById("arrow5").classList.add("hide");
    }
    if(document.getElementById("arrow6").classList.contains("hide")){
      document.getElementById("arrow6").classList.remove("hide");
    }else{
      document.getElementById("arrow6").classList.add("hide");
    }
    if(document.getElementById("arrow7").classList.contains("hide")){
      document.getElementById("arrow7").classList.remove("hide");
    }else{
      document.getElementById("arrow7").classList.add("hide");
    }
    
    toggleswitch4();
    if(!toggleVisibility4){
      
      document.getElementById("box6").classList.add("move10");
      document.getElementById("box7").classList.add("move13");
      document.getElementById("box8").classList.add("move17");
      document.getElementById("box9").classList.add("move17");
      document.getElementById("box10").classList.add("move17");
    }else{
      
      document.getElementById("box6").classList.remove("move10");
      document.getElementById("box7").classList.remove("move13");
      document.getElementById("box8").classList.remove("move17");
      document.getElementById("box9").classList.remove("move17");
      document.getElementById("box10").classList.remove("move17");
    }
  
  }

  function toggleAnimation5() {
    if(document.getElementById("arrow8").classList.contains("hide")){
      document.getElementById("arrow8").classList.remove("hide");
    }else{
      document.getElementById("arrow8").classList.add("hide");
    }
    toggleswitch5();
    if(!toggleVisibility5){
      document.getElementById("box7").classList.add("move14");
      document.getElementById("box8").classList.add("move18");
      document.getElementById("box9").classList.add("move18");
      document.getElementById("box10").classList.add("move18");
    }else{
      document.getElementById("box7").classList.remove("move14");
      document.getElementById("box8").classList.remove("move18");
      document.getElementById("box9").classList.remove("move18");
      document.getElementById("box10").classList.remove("move18");
    }
  
  }
  function toggleAnimation6() {
    // if(document.getElementById("arrow8").classList.contains("hide")){
    //   document.getElementById("arrow8").classList.remove("hide");
    // }else{
    //   document.getElementById("arrow8").classList.add("hide");
    // }
    toggleswitch6();
    if(!toggleVisibility6){
      document.getElementById("box8").classList.add("move19");
      document.getElementById("box9").classList.add("move20");
      document.getElementById("box10").classList.add("move21");
    }else{
      document.getElementById("box8").classList.remove("move19");
      document.getElementById("box9").classList.remove("move20");
      document.getElementById("box10").classList.remove("move21");
    }
  
  }



  return (
    <>
      <div className="box-main" onClick={toggleAnimation1}>
        
      </div>
      <div className="box" id="box1" onClick={toggleAnimation3}></div>
      <div className="box" id="box2" onClick={toggleAnimation3}></div>
      <div className="box" id="box3" onClick={toggleAnimation2}></div>
      <div className="box-lvl1" id="box4" ></div>
      <div className="box-lvl1 lvlup" id="box5"  onClick={toggleAnimation4}></div>
      <div className="box-lvl2" id="box6" onClick={toggleAnimation5} ></div>
      <div className="box-lvl3" id="box7" onClick={toggleAnimation6}></div>
      <div className="box-lvl4" id="box8" ></div>
      <div className="box-lvl4" id="box9" ></div>
      <div className="box-lvl4" id="box10" ></div>


      <div className={arrow1 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -250 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 -75 200 -75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 -75 200 -75"
          />
        </svg>
      </div>
      <div className={arrow1 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -150 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />
        </svg>
      </div>
      <div className={arrow1 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -50 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />
        </svg>
      </div>
      <div id="arrow2" className="arrow hide">
        <svg
          width="315px"
          height="107px"
          viewBox="85 -20 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow3" >
        <svg
          width="315px"
          height="107px"
          viewBox="85 155 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow4" >
        <svg
          width="315px"
          height="107px"
          viewBox="85 180 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow5" >
        <svg
          width="315px"
          height="107px"
          viewBox="-165 290 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow6" >
        <svg
          width="315px"
          height="107px"
          viewBox="85 490 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 230 0 230 75 450 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 230 0 230 75 450 75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow7" >
        <svg
          width="315px"
          height="107px"
          viewBox="85 500 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 200 70 230 70 450 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 200 70 230 70 450 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow8" >
        <svg
          width="315px"
          height="107px"
          viewBox="-415 625 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 47.5 0 47.5 0 95 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />
        </svg>
      </div>

      <div className={arrow6 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -250 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 -75 200 -75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 -75 200 -75"
          />
        </svg>
      </div>
      <div className={arrow6 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -150 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 0 200 0"
          />
        </svg>
      </div>
      <div className={arrow6 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="340 -50 315 107"
          version="1.1"
          style={{ overflow: "visible" }}
        >
          <path
            id="Path-1"
            className="path"
            fill="none"
            stroke="#db5862"
            strokeWidth="5"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 100 0 100 75 200 75"
          />
        </svg>
      </div>
      
    </>
  );
};
