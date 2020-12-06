import React from "react";
import logo from "../logo.svg";
import "./main-dashboard.css";

class MainDashboard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>I'm a spinning Chiho</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}
export default MainDashboard;
