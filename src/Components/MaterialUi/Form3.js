import React, { Component } from "react";

class AddDefect extends Component {
  state = {
    id: null,
    module: null,
    description: null,
    steps: null,
    severity: null,
    priority: null,
    defecttype: null,
    enterdate: null,
    enterby: null,
    status: null,
    assignto: null,
    fixedby: null,
    fixeddate: null,
    availablein: null,
    comments: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="add">
        <h1>
          <center> DEFECT </center>
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required /> */}
          {/* <label htmlFor="id">Defect ID</label> */}
          Defect ID:<br />
          <input type="text" id="id" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="module">Module</label> */}
          Module:<br />
          <input type="text" id="module" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="description">Description</label> */}
          Description: <br />
          <input type="text" id="description" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="steps">Steps to Recreate</label> */}
          Steps to Recreate: <br />
          <input type="text" id="steps" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="severity">Severity</label> */}
          Severity: <br />
          <select id="severity" onChange={this.handleChange}>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
          <br />
          {/* <label htmlFor="priority">Priority</label> */}
          Priority: <br />
          <select id="priority" onChange={this.handleChange}>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
          </select>
          <br />
          {/* <label htmlFor="defecttype">Defect Type</label> */}
          Defect Type: <br />
          <input type="text" id="defecttype" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="enterdate">Entered Date</label> */}
          Enter Date: <br />
          <input type="text" id="enterdate" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="enterby">Entered By</label> */}
          Entered By: <br />
          <input type="text" id="enterby" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="status">Status</label> */}
          Status: <br />
          <input type="text" id="status" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="assignto">Assigned To</label> */}
          Assigned To: <br />
          <input type="text" id="assignto" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="fixedby">Fixed By</label> */}
          Fixed By: <br />
          <input type="text" id="fixedby" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="fixeddate">Fixed Date</label> */}
          Fixed Date: <br />
          <input type="text" id="fixeddate" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="availablein">Available In</label> */}
          Available In: <br />
          <input type="text" id="availablein" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="comments">Comments</label> */}
          Comments: <br />
          <input type="text" id="comments" onChange={this.handleChange} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddDefect;
