import logo from './logo.svg';
import {BarChart1, BarChart2} from "./components/BarChart.tsx";
import './App.css';

import { Workflow } from '../src/components/workflow';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='container'>
      <Workflow />
      </div>
      <div className='container'>
      <BarChart1 />
      </div>
      <div className='container'>
      <BarChart2 />
      </div>
    </div>
  );
}

export default App;
