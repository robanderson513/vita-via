import React from "react";

class ExerciseDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        _id: "",
        firstName: "",
        lastName: "",
        dob: "",
        number: "",
        email: "",
        address: "",
      },
    };
    this.logId = this.logId.bind(this);
  }

  getUser(name) {
    fetch(`http://localhost:8000/user/${name}`)
      .then((response) => response.json())
      .then((data) => this.setState({ User: data }));
  }

  logId() {
    console.log(this.state.User._id);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.getUser.bind(this, "Rob")}>Pick Rob</button>
          <button onClick={this.getUser.bind(this, "Chiho")}>Pick Chiho</button>
          <p>Lift Weights</p>
          <h1>{this.state.User.firstName + " " + this.state.User.lastName}</h1>
          <p>{this.state.User.dob}</p>
          <p>{this.state.User.number}</p>
          <p>{this.state.User.email}</p>
          <p>{this.state.User.address}</p>
          <button onClick={this.logId}>What's my Id</button>
        </div>
      </div>
    );
  }
}
export default ExerciseDashboard;
