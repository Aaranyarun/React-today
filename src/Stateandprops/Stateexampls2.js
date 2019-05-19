import React, { Component } from "react";

class Stateexampls2 extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "Aarany", age: "26", email: "aaranyarun@gmail.com" };
  }
  changeName() {
    this.setState({ name: "Thadsha", age: "25", email: "thadsha@gmail.com" });
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h3>{this.state.age}</h3>
        <h3>{this.state.email}</h3>

        <button
          color="primary"
          variant="contained"
          type="Submit"
          onClick={this.changeName}
        >
          change
        </button>
      </div>
    );
  }
}
export default Stateexampls2;
