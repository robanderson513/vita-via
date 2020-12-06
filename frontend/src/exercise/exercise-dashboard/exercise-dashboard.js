import React from "react";

class ExerciseDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        Name: "",
        Phrase: "",
      },
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/user")
      .then((response) => response.json())
      .then((data) => this.setState({ User: data }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Lift Weights</p>
          <h1>{this.state.User.Name}</h1>
          <p>{this.state.User.Phrase}</p>
        </div>
      </div>
    );
  }
}
export default ExerciseDashboard;
