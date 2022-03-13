import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./side-nav.css";

class SideNav extends React.Component {
  constructor() {
    super();
    this.state = { isCollapsed: true };
  }

  toggleSideNav = () =>
    this.setState((state) => ({ isCollapsed: !state.isCollapsed }));

  render() {
    return (
      <div>
        <button className="nav-button" onClick={this.toggleSideNav}>
          <FontAwesomeIcon className="nav-icon" icon={faBars} />
        </button>
        <div
          className="side-nav"
          style={{ width: !this.state.isCollapsed ? "45vw" : "0" }}
        >
          <p style={{ color: "white" }}>I'm a side Chiho</p>
        </div>
      </div>
    );
  }
}
export default SideNav;
