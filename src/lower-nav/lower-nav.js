import React from "react";
import "./lower-nav.css";
import {
  faHome,
  faUtensils,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class LowerNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="lower-nav">
        <Link to="/exercise">
          <FontAwesomeIcon className="nav-icon" icon={faDumbbell} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="nav-icon" icon={faHome} />
        </Link>
        <Link to="/diet">
          <FontAwesomeIcon className="nav-icon" icon={faUtensils} />
        </Link>
      </div>
    );
  }
}
export default LowerNav;
