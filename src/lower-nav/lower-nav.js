import React from "react";
import "./lower-nav.css";

class LowerNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="lower-nav">
        <p style={{ color: "white" }}>I'm a lower Chiho</p>
      </div>
    );
  }
}
export default LowerNav;
