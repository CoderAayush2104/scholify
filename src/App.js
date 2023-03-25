import logo from './logo.svg';
import BarChart from "./components/BarChart";
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
      <Workflow />
      <BarChart />
    </div>
  );
}

export default App;
