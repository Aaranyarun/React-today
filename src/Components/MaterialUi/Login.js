import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2> LOG IN</h2>

        <form>
          <Input
            placeholder="Your Name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="pass Word"
            style={{ width: "500px", margin: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="Submit"
            style={{ width: "500px", margin: "10px" }}
          />
        </form>
      </div>
    );
  }
}
