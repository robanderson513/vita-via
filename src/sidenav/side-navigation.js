import React from "react";
import "./side-navigation.css";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="sidenav"
        style={{ width: !this.props.isCollapsed ? "45vw" : "0" }}
      >
        <p style={{ color: "white" }}>I'm a side Chiho</p>
      </div>
    );
  }
}
export default SideNav;
