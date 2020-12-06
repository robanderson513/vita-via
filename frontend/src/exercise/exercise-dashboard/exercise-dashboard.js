import React from "react";

class ExerciseDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Greeting: "",
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch("http://localhost:8000/user")
      .then((response) => response.json())
      .then((data) => this.setState({ Greeting: data.user }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Lift Weights</p>
          <p>{this.state.Greeting}</p>
        </div>
      </div>
    );
  }
}
export default ExerciseDashboard;
