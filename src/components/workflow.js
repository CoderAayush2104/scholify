import React from "react";
import "../components/workflow.css";
import { useState } from "react";
import Data from "../Data.json";
import node_volumes from "../node_volume.json";
// MyComponent.jsx
// @ts-check
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

  const [toggleVisibility7, setToggleVisibility7] = useState();
  const [arrow7, setArrow7] = useState(false);

  const [toggleVisibility8, setToggleVisibility8] = useState();
  const [arrow8, setArrow8] = useState(false);

  const [toggleVisibility9, setToggleVisibility9] = useState();
  const [arrow9, setArrow9] = useState(false);

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
  function toggleArrow7() {
    if (arrow7) {
      setArrow7(false);
      return;
    }
    setArrow7(true);
  }
  function toggleArrow8() {
    if (arrow8) {
      setArrow8(false);
      return;
    }
    setArrow8(true);
  }
  function toggleArrow9() {
    if (arrow9) {
      setArrow9(false);
      return;
    }
    setArrow9(true);
  }
  function toggleswitch1() {
    if (toggleVisibility1) {
      setToggleVisibility1(false);
      return;
    }
    setToggleVisibility1(true);
  }
  function toggleswitch2() {
    if (toggleVisibility2) {
      setToggleVisibility2(false);
      return;
    }
    setToggleVisibility2(true);
  }
  function toggleswitch3() {
    if (toggleVisibility3) {
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
  function toggleswitch7() {
    if (toggleVisibility7) {
      setToggleVisibility7(false);
      return;
    }
    setToggleVisibility7(true);
  }
  function toggleswitch8() {
    if (toggleVisibility8) {
      setToggleVisibility8(false);
      return;
    }
    setToggleVisibility8(true);
  }
  function toggleswitch9() {
    if (toggleVisibility9) {
      setToggleVisibility9(false);
      return;
    }
    setToggleVisibility9(true);
  }
  function toggleAnimation1() {
    if (!document.getElementById("arrow2").classList.contains("hide")) {
      document.getElementById("arrow2").classList.add("hide");
    }
    if (!document.getElementById("arrow3").classList.contains("hide")) {
      document.getElementById("arrow3").classList.add("hide");
    }
    if (!document.getElementById("arrow4").classList.contains("hide")) {
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
      document.getElementById("box8").classList.add("move11");
      document.getElementById("box9").classList.add("move16");
      document.getElementById("box10").classList.add("move16");
      document.getElementById("box11").classList.add("move16");
      document.getElementById("box12").classList.add("move23");
      document.getElementById("box13").classList.add("move28");
      document.getElementById("box14").classList.add("move34");
    } else {
      document.getElementById("box1").classList.remove("move1");
      document.getElementById("box2").classList.remove("move2");
      document.getElementById("box3").classList.remove("move3");
      document.getElementById("box4").classList.remove("move4");
      document.getElementById("box5").classList.remove("move6");
      document.getElementById("box6").classList.remove("move8");
      document.getElementById("box7").classList.remove("move11");
      document.getElementById("box8").classList.remove("move11");
      document.getElementById("box9").classList.remove("move16");
      document.getElementById("box10").classList.remove("move16");
      document.getElementById("box11").classList.remove("move16");
      document.getElementById("box12").classList.remove("move23");
      document.getElementById("box13").classList.remove("move28");
      document.getElementById("box14").classList.remove("move34");
    }
  }
  function toggleAnimation2() {
    if (document.getElementById("arrow2").classList.contains("hide")) {
      document.getElementById("arrow2").classList.remove("hide");
    } else {
      document.getElementById("arrow2").classList.add("hide");
    }

    toggleswitch2();
    if (!toggleVisibility2) {
      document.getElementById("box4").classList.add("move5");
    } else {
      document.getElementById("box4").classList.remove("move5");
    }
  }
  function toggleAnimation3() {
    if (document.getElementById("arrow3").classList.contains("hide")) {
      document.getElementById("arrow3").classList.remove("hide");
    } else {
      document.getElementById("arrow3").classList.add("hide");
    }
    if (document.getElementById("arrow4").classList.contains("hide")) {
      document.getElementById("arrow4").classList.remove("hide");
    } else {
      document.getElementById("arrow4").classList.add("hide");
    }

    toggleswitch3();
    if (!toggleVisibility3) {
      document.getElementById("box5").classList.add("move7");
      document.getElementById("box6").classList.add("move9");
      document.getElementById("box7").classList.add("move12");
      document.getElementById("box8").classList.add("move12");
      document.getElementById("box9").classList.add("move17");
      document.getElementById("box10").classList.add("move17");
      document.getElementById("box11").classList.add("move17");
      document.getElementById("box12").classList.add("move24");
      document.getElementById("box13").classList.add("move29");
      document.getElementById("box14").classList.add("move35");
    } else {
      document.getElementById("box5").classList.remove("move7");
      document.getElementById("box6").classList.remove("move9");
      document.getElementById("box7").classList.remove("move12");
      document.getElementById("box8").classList.remove("move12");
      document.getElementById("box9").classList.remove("move17");
      document.getElementById("box10").classList.remove("move17");
      document.getElementById("box11").classList.remove("move17");
      document.getElementById("box12").classList.remove("move24");
      document.getElementById("box13").classList.remove("move29");
      document.getElementById("box14").classList.remove("move35");
    }
  }
  function toggleAnimation4() {
    if (document.getElementById("arrow5").classList.contains("hide")) {
      document.getElementById("arrow5").classList.remove("hide");
    } else {
      document.getElementById("arrow5").classList.add("hide");
    }
    if (document.getElementById("arrow6").classList.contains("hide")) {
      document.getElementById("arrow6").classList.remove("hide");
    } else {
      document.getElementById("arrow6").classList.add("hide");
    }
    if (document.getElementById("arrow7").classList.contains("hide")) {
      document.getElementById("arrow7").classList.remove("hide");
    } else {
      document.getElementById("arrow7").classList.add("hide");
    }

    toggleswitch4();
    if (!toggleVisibility4) {
      document.getElementById("box6").classList.add("move10");
      document.getElementById("box7").classList.add("move13");
      document.getElementById("box8").classList.add("move13");
      document.getElementById("box9").classList.add("move18");
      document.getElementById("box10").classList.add("move18");
      document.getElementById("box11").classList.add("move18");
      document.getElementById("box12").classList.add("move25");
      document.getElementById("box13").classList.add("move30");
      document.getElementById("box14").classList.add("move36");
    } else {
      document.getElementById("box6").classList.remove("move10");
      document.getElementById("box7").classList.remove("move13");
      document.getElementById("box8").classList.remove("move13");
      document.getElementById("box9").classList.remove("move18");
      document.getElementById("box10").classList.remove("move18");
      document.getElementById("box11").classList.remove("move18");
      document.getElementById("box12").classList.remove("move25");
      document.getElementById("box13").classList.remove("move30");
      document.getElementById("box14").classList.remove("move36");
    }
  }

  function toggleAnimation5() {
    if (document.getElementById("arrow8").classList.contains("hide")) {
      document.getElementById("arrow8").classList.remove("hide");
    } else {
      document.getElementById("arrow8").classList.add("hide");
    }
    if (document.getElementById("arrow9").classList.contains("hide")) {
      document.getElementById("arrow9").classList.remove("hide");
    } else {
      document.getElementById("arrow9").classList.add("hide");
    }
    toggleswitch5();
    if (!toggleVisibility5) {
      document.getElementById("box7").classList.add("move14");
      document.getElementById("box8").classList.add("move15");
      document.getElementById("box9").classList.add("move19");
      document.getElementById("box10").classList.add("move19");
      document.getElementById("box11").classList.add("move19");
      document.getElementById("box12").classList.add("move26");
      document.getElementById("box13").classList.add("move31");
      document.getElementById("box14").classList.add("move37");
    } else {
      document.getElementById("box7").classList.remove("move14");
      document.getElementById("box8").classList.remove("move15");
      document.getElementById("box9").classList.remove("move19");
      document.getElementById("box10").classList.remove("move19");
      document.getElementById("box11").classList.remove("move19");
      document.getElementById("box12").classList.remove("move26");
      document.getElementById("box13").classList.remove("move31");
      document.getElementById("box14").classList.remove("move37");
    }
  }

  function toggleAnimation6() {
    if (document.getElementById("arrow10").classList.contains("hide")) {
      document.getElementById("arrow10").classList.remove("hide");
    } else {
      document.getElementById("arrow10").classList.add("hide");
    }
    if (document.getElementById("arrow11").classList.contains("hide")) {
      document.getElementById("arrow11").classList.remove("hide");
    } else {
      document.getElementById("arrow11").classList.add("hide");
    }
    if (document.getElementById("arrow12").classList.contains("hide")) {
      document.getElementById("arrow12").classList.remove("hide");
    } else {
      document.getElementById("arrow12").classList.add("hide");
    }
    toggleswitch6();
    if (!toggleVisibility6) {
      document.getElementById("box9").classList.add("move20");
      document.getElementById("box10").classList.add("move21");
      document.getElementById("box11").classList.add("move22");
      document.getElementById("box13").classList.add("move32");
      document.getElementById("box14").classList.add("move38");
    } else {
      document.getElementById("box9").classList.remove("move20");
      document.getElementById("box10").classList.remove("move21");
      document.getElementById("box11").classList.remove("move22");
      document.getElementById("box13").classList.remove("move32");
      document.getElementById("box14").classList.remove("move38");
    }
  }

  function toggleAnimation7() {
    if (document.getElementById("arrow13").classList.contains("hide")) {
      document.getElementById("arrow13").classList.remove("hide");
    } else {
      document.getElementById("arrow13").classList.add("hide");
    }
    if (document.getElementById("arrow14").classList.contains("hide")) {
      document.getElementById("arrow14").classList.remove("hide");
    } else {
      document.getElementById("arrow14").classList.add("hide");
    }

    toggleswitch7();
    if (!toggleVisibility7) {
      document.getElementById("box12").classList.add("move27");
    } else {
      document.getElementById("box12").classList.remove("move27");
    }
  }

  function toggleAnimation8() {
    if (document.getElementById("arrow15").classList.contains("hide")) {
      document.getElementById("arrow15").classList.remove("hide");
    } else {
      document.getElementById("arrow15").classList.add("hide");
    }

    toggleswitch8();
    if (!toggleVisibility8) {
      document.getElementById("box13").classList.add("move33");
    } else {
      document.getElementById("box13").classList.remove("move33");
    }
  }
  function toggleAnimation9() {
    if (document.getElementById("arrow16").classList.contains("hide")) {
      document.getElementById("arrow16").classList.remove("hide");
    } else {
      document.getElementById("arrow16").classList.add("hide");
    }
    if (document.getElementById("arrow17").classList.contains("hide")) {
      document.getElementById("arrow17").classList.remove("hide");
    } else {
      document.getElementById("arrow17").classList.add("hide");
    }

    toggleswitch9();
    if (!toggleVisibility9) {
      document.getElementById("box14").classList.add("move39");
    } else {
      document.getElementById("box14").classList.remove("move39");
    }
  }
  function get_user_list(count) {
    const randomIntArrayInRange = (min, max, n = count) =>
      Array.from(
        { length: n },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
    const rand_index = randomIntArrayInRange(0, 100, count);
    const user_data = [];
    rand_index.forEach((index) => {
      // console.log(Data.data[index - 1]);
      user_data.push(Data.data[index - 1]);
    });
    // console.log(user_data);
    return user_data;
  }
  let btn_id;
  const handleClick = (event) => {
    console.log(event.currentTarget.id);
    btn_id = event?.currentTarget?.id;
    const val = node_volumes["volumes"][btn_id];
    console.log(val)
    // console.log(val)
    const user_data = get_user_list(val);
    console.log(user_data)
    // console.log(user_data);
    return user_data.map((user) => {
      // console.log(user);
      return (
        <tr>
          <td>{user?.["id"]}</td>
          <td>{user?.["name"]}</td>
          <td>{user?.["email"]}</td>
          <td>{user?.["application_date"]}</td>
          <td>{user?.["12 CGPA"]}</td>
          <td>{user?.["Match"]}</td>
          <td>{user?.["Location"]}</td>
          <td>{user?.["Reason_for_drop"]}</td>
        </tr>
      );
    });
  };
  // function tdData() {
  //   console.log("btn_id = ",btn_id)
  //   const val = node_volumes["volumes"][{btn_id}];
  //   // console.log(val)
  //   const user_data = get_user_list(val);
  //   // console.log(user_data);
  //   return user_data.map((user) => {
  //     // console.log(user);
  //     return (
  //       <tr>
  //         <td>{user?.["id"]}</td>
  //         <td>{user?.["name"]}</td>
  //         <td>{user?.["email"]}</td>
  //         <td>{user?.["application_date"]}</td>
  //         <td>{user?.["12 CGPA"]}</td>
  //         <td>{user?.["Match"]}</td>
  //         <td>{user?.["Location"]}</td>
  //         <td>{user?.["Reason_for_drop"]}</td>
  //       </tr>
  //     );
  //   });
  // }

  return (
    <>
      <>
        <div className="box-main" onClick={toggleAnimation1}>
          <button
            id="node1"
            className="button-1"
            onClick={handleClick}
            data-toggle="modal"
            data-target="#myModal"
          >
            100
          </button>
          <div className="label">
          <p className={toggleVisibility1?"":"hide"}>Views</p>
          </div>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">User Data</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>Email</th>
                      <th>application_date</th>
                      <th>12 CGPA</th>
                      <th>Match</th>
                      <th>Location/</th>
                      <th>Reason_for_dropoff</th>
                    </tr>
                  </thead>
                  <tbody>{handleClick}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="box" id="box1" onClick={toggleAnimation3}>
        <button
          id="node2"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          30
        </button>
        <div className="label">
        <p className={toggleVisibility1?"":"hide"}>Bookmarked</p>
        </div>
      </div>
      <div className="box" id="box2" onClick={toggleAnimation3}>
        <button
          id="node3"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          50
        </button>
        <div className="label">
        <p className={toggleVisibility1?"":"hide"}>T & C Enquiry</p>
        </div>
      </div>
      <div className="box" id="box3" onClick={toggleAnimation2}>
      
        <button class="button-1" data-toggle="modal" data-target="#myModal">
        <button
          id="node4"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          20
        </button>
        <div className="label">
        <p className={toggleVisibility1?"":"hide"}>Closed</p>
        </div>
      </div>
      <div className="box-lvl1" id="box4">
        <button
          id="node5"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          20
        </button>
        <div className="label">
        <p className={toggleVisibility2?"":"hide"}>Missed Deadline</p>
        </div>
      </div>
      <div className="box-lvl1 lvlup" id="box5" onClick={toggleAnimation4}>
        <button
          id="node6"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          35
        </button>
        <div className="label">
        <p className={toggleVisibility3?"":"hide"}>Visited Sponsor Website</p>
        </div>
      </div>
      <div className="box-lvl2" id="box6" onClick={toggleAnimation5}>
        <button
          id="node7"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          45
        </button>
        <div className="label">
        <p className={toggleVisibility4?"":"hide"}>Applied</p>
        </div>
      </div>
      <div className="box-lvl3" id="box7" onClick={toggleAnimation6}>
        <button
          id="node8"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          20
        </button>
        <div className="label">
        <p className={toggleVisibility5?"":"hide"}>Full</p>
        </div>
      </div>
      <div className="box-lvl3" id="box8" onClick={toggleAnimation7}>
        <button
          id="node9"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          25
        </button>
        <div className="label">
        <p className={toggleVisibility5?"":"hide"}>Doc_Upload</p>
        </div>
      </div>
      <div className="box-lvl4" id="box9" onClick={toggleAnimation7}>
        <button
          id="node10"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          5
        </button>
        <div className="label">
        <p className={toggleVisibility6?"":"hide"}>Late Upload</p>
        </div>
      </div>
      <div className="box-lvl4" id="box10" onClick={toggleAnimation8}>
        <button
          id="node12"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          10
        </button>
        <div className="label">
        <p className={toggleVisibility6?"":"hide"}>Verification Failed</p>
        </div>
      </div>
      <div className="box-lvl4" id="box11" onClick={toggleAnimation9}>
        <button
          id="node12"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          10
        </button>
        <div className="label">
        <p className={toggleVisibility6?"":"hide"}>Verified</p>
        </div>
      </div>
      <div className="box-lvl5" id="box12">
        <button
          id="node13"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          5
        </button>
        <div className="label">
        <p className={toggleVisibility7?"":"hide"}>Rejected</p>
        </div>
      </div>
      <div className="box-lvl5" id="box13" onClick={toggleAnimation9}>
        <button
          id="node14"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          5
        </button>
        <div className="label">
        <p className={toggleVisibility8?"":"hide"}>Re Upload</p>
        </div>
      </div>
      <div className="box-lvl6" id="box14">
        <button
          id="node15"
          className="button-1"
          onClick={handleClick}
          data-toggle="modal"
          data-target="#myModal"
        >
          15
        </button>
        <div className="label">
        <p className={toggleVisibility9?"":"hide"}>Accepted</p>
        </div>
      </div>
      <div className={arrow1 ? "arrow" : "hide"}>
        <svg
          width="315px"
          height="107px"
          viewBox="405 -250 315 107"
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
          viewBox="405 -150 315 107"
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
          viewBox="405 -50 315 107"
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
          viewBox="155 -20 315 107"
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
      <div className="arrow hide" id="arrow3">
        <svg
          width="315px"
          height="107px"
          viewBox="155 155 315 107"
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
      <div className="arrow hide" id="arrow4">
        <svg
          width="315px"
          height="107px"
          viewBox="155 180 315 107"
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
      <div className="arrow hide" id="arrow5">
        <svg
          width="315px"
          height="107px"
          viewBox="-95 300 315 107"
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
      <div className="arrow hide" id="arrow6">
        <svg
          width="315px"
          height="107px"
          viewBox="155 500 315 107"
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
      <div className="arrow hide" id="arrow7">
        <svg
          width="315px"
          height="107px"
          viewBox="155 520 315 107"
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
      <div className="arrow hide" id="arrow8">
        <svg
          width="315px"
          height="107px"
          viewBox="-350 640 315 107"
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
            d="m 0 0 c 47.5 0 47.5 0 95 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow9">
        <svg
          width="315px"
          height="107px"
          viewBox="-345 760 315 107"
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
            d="m 0 0 c 50 0 50 -75 100 -75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 50 0 50 -75 100 -75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow10">
        <svg
          width="315px"
          height="107px"
          viewBox="-495 880 315 107"
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
            d="m 0 0 c 25 0 25 -75 50 -75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 25 0 25 -75 50 -75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow11">
        <svg
          width="315px"
          height="107px"
          viewBox="-495 980 315 107"
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
            d="m 0 0 c 25 0 25 0 50 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 25 0 25 0 50 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow12">
        <svg
          width="315px"
          height="107px"
          viewBox="-495 1080 315 107"
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
            d="m 0 0 c 25 0 25 75 50 75"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 25 0 25 75 50 75"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow13">
        <svg
          width="315px"
          height="107px"
          viewBox="-480 1310 315 107"
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
            d="m 0 0 c 80 -35 92 -35 180 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 80 -35 92 -35 180 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow14">
        <svg
          width="315px"
          height="107px"
          viewBox="-595 1400 315 107"
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
            d="m 0 0 c 25 0 25 0 50 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 25 0 25 0 50 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow15">
        <svg
          width="315px"
          height="107px"
          viewBox="-595 1200 315 107"
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
            d="m 0 0 c 25 0 25 0 50 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 25 0 25 0 50 0"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow16">
        <svg
          width="315px"
          height="107px"
          viewBox="-695 1310 315 107"
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
            d="m 0 0 c 80 0 80 0 80 58.4"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 80 0 80 0 80 58.4"
          />
        </svg>
      </div>
      <div className="arrow hide" id="arrow17">
        <svg
          width="315px"
          height="107px"
          viewBox="-595 1340 315 107"
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
            d="m 0 0 c 75 0 75 0 150 0"
          />

          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinejoin="round"
            stroke-miterlimit="10"
            d="m 0 0 c 75 0 75 0 150 0"
          />
        </svg>
      </div>
    </>
  );
};
