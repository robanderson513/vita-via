import React from "react";
import "./lower-nav.css";
import {
  faHome,
  faUtensils,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LowerNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="lower-nav">
        <button>
          <FontAwesomeIcon className="nav-icon" icon={faDumbbell} />
        </button>
        <button>
          <FontAwesomeIcon className="nav-icon" icon={faHome} />
        </button>
        <button>
          <FontAwesomeIcon className="nav-icon" icon={faUtensils} />
        </button>
      </div>
    );
  }
}
export default LowerNav;
