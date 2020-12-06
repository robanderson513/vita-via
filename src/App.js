import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home-page/home-page";
import Diet from "./diet/diet";
import Exercise from "./exercise/exercise";
import LowerNav from "./lower-nav/lower-nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/diet" exact component={Diet} />
          <Route path="/exercise" exact component={Exercise} />
        </div>
        <LowerNav></LowerNav>
      </div>
    );
  }
}
export default App;
