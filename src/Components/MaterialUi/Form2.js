import React, { Component } from "react";
class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputvalue: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("Form value: " + this.state.inputvalue);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Form2">
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.inputvalue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form2;
