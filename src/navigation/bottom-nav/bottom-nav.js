import React from "react";
import "./bottom-nav.css";
import {
  faHome,
  faUtensils,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bottom-nav">
        <Link to="/exercise">
          <FontAwesomeIcon className="nav-icon" icon={faDumbbell} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="nav-icon" icon={faHome} />
        </Link>
        <Link to="/nutrition">
          <FontAwesomeIcon className="nav-icon" icon={faUtensils} />
        </Link>
      </div>
    );
  }
}
export default BottomNav;
