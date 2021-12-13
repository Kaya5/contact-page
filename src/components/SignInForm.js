import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/SignInFormStyles";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      textArea: "",
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Thank you for your message");
    this.setState({
      value: "",
    });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <h1 className={classes.title}>Let's Talk</h1>
          <div className={classes.nameEmail}>
            <input
              className={classes.name}
              type="text"
              name="name"
              placeholder="Your name"
              label="name"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
            <input
              className={classes.email}
              type="text"
              name="email"
              placeholder="Your email"
              label="email"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className={classes.textBox}>
            <textarea
              className={classes.textArea}
              margin="normal"
              name="textArea"
              label="EnterMessage"
              placeholder="Your message"
              value={this.state.value}
              onChange={this.handleChange}
              required
              // fullWidth
            />
          </div>
          <div className={classes.bottomDiv}>

            <div className={classes.CheckDiv}>
              <Checkbox className={classes.checkbox} color="#45d4d6" />
              <div className={classes.sendCopy}>Send me a copy</div>
            </div>

            <Button
              onClick={this.handleSubmit}
              variant="contained"
              color="secondary"
              className={classes.messageButton}
            >
              <div className={classes.messageText}>Send a Message</div>
            </Button>
          </div>
        </form>
        <div className={classes.separator}>
          <hr></hr>
          <span className={classes.span}>
            <b>OR CALL US</b>
          </span>
          <hr className={classes.topLine}></hr>
        </div>
        <div className={classes.phoneNo}>
          <h3>234 (80) 0000 0000</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignInForm);
