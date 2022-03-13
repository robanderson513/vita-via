
import React from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./side-nav.css";

type componentState = { isCollapsed: boolean }
class SideNav extends React.Component<{}, componentState> {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: true };
  }

  toggleSideNav = () =>
    this.setState((state) => ({ isCollapsed: !state.isCollapsed }));

  render() {
    return (
      <div>
        <button className="nav-button" onClick={this.toggleSideNav}>
          <FontAwesomeIcon className="nav-icon" icon={faBars as IconProp} />
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
