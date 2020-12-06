import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./main-dashboard/main-dashboard";
import NutritionDashboard from "./nutrition/nutrition-dashboard/nutrition-dashboard";
import ExerciseDashboard from "./exercise/exercise-dashboard/exercise-dashboard";
import BottomNav from "./navigation/bottom-nav/bottom-nav";
import SideNav from "./navigation/side-nav/side-nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/nutrition" exact component={NutritionDashboard} />
          <Route path="/exercise" exact component={ExerciseDashboard} />
        </div>
        <div>
          <SideNav></SideNav>
          <BottomNav></BottomNav>
        </div>
      </div>
    );
  }
}
export default App;
