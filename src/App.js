import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Page from "./page"; 
import "./App.css";
import Home from "./home";

import { Workflow } from "../src/components/workflow";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/page" element={<Page/>}/>     
        </Routes>
    
    </div>
  );
}

export default App;
