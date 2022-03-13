

import { User } from "@vita-via/interfaces";
import React from "react";

class ExerciseDashboard extends React.Component<{}, {User: User}> {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        _id: null,
        firstName: null,
        lastName: null,
        dob: null,
        number: null,
        email: null,
        address: null,
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
