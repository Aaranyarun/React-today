import React, { Component } from "react";

export default class StateExampls3 extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", city: "" }
    };
  }
  componentDidMount() {
    this.setState({
      person: { name: "AArany", city: "Jaffna" }
    });
  }
  componentDidUpdate() {
    console.log("component has been update", this.state);
  }
  render() {
    return (
      <div>
        <p> Name :{this.state.person.name}</p>
        <p> city :{this.state.person.city}</p>
      </div>
    );
  }
}
