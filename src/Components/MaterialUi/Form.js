import React from "react";
//import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
//import OutlinedInput from "@material-ui/core/OutlinedInput";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class ComposedTextField extends React.Component {
  state = {
    FirstName: "",
    LastName: null
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input
            id="component-simple"
            value={this.state.FirstName}
            onChange={this.handleChange}
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-helper">Last Name</InputLabel>
          <Input
            id="component-helper"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <FormHelperText id="component-helper-text" />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-disabled">Age</InputLabel>
          <Input
            id="component-disabled"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {/* <FormHelperText>Disabled</FormHelperText> */}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-error">Mobil</InputLabel>
          <Input
            id="component-error"
            value={this.state.name}
            onChange={this.handleChange}
            aria-describedby="component-error-text"
          />

          <FormHelperText id="component-error-text" />
        </FormControl>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComposedTextField);
