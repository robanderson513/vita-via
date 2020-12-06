import React from "react";
import logo from "./logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import SideNav from "./sidenav/side-navigation";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isCollapsed: true };
  }

  toggleSideNav = () => {
    this.setState((state) => ({ isCollapsed: !state.isCollapsed }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleSideNav}>
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <SideNav isCollapsed={this.state.isCollapsed}></SideNav>
        <div
          className="body"
          style={{ marginLeft: !this.state.isCollapsed ? "250px" : "0" }}
        >
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
export default App;
