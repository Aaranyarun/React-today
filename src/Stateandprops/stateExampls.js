import React, { Component } from "react";

class StateExampls extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "Aarany" };
  }
  changeName() {
    this.setState({ name: "Thadsh" });
  }
  render() {
    return (
      <div>
        <h3> Hello{this.state.name}</h3>
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

export default StateExampls;
