import React from "react";
import { Link } from "react-router-dom";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import "./bottom-nav.css";

class BottomNav extends React.Component {
  render() {
    return (
      <div className="bottom-nav">
        <Link to="/exercise">
          <FontAwesomeIcon className="nav-icon" icon={faDumbbell as IconProp} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="nav-icon" icon={faHome as IconProp} />
        </Link>
        <Link to="/nutrition">
          <FontAwesomeIcon className="nav-icon" icon={faUtensils as IconProp} />
        </Link>
      </div>
    );
  }
}
export default BottomNav;
