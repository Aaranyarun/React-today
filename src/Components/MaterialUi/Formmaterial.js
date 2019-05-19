import React, { Component } from "react";

import { Button, Input } from "@material-ui/core";

class Formmaterial extends Component {
  render() {
    return (
      <div align="center">
        <h2> This is material form Example</h2>

        <form>
          <Input
            placeholder="Enter your name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter your name"
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
export default Formmaterial;
