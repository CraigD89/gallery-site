import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Dialog, {
  DialogActions,
  DialogContent
  //   DialogContentText,
  // DialogTitle,
} from "material-ui/Dialog";
import API from "../../utils/API";
import { Link } from "react-router-dom";

export default class FormDialog extends React.Component {
  state = {
    open: false,
    email: "",
    password: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //Login post to DB
  validateForm() {
    return this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email) {
      API.saveUser({
        email: this.state.email,
        password: this.state.password
      }).catch(err => console.log(err));
    };
    this.setState({ open: false });

  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>LOGIN</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <TextField
              //   autoFocus
              value={this.state.email}
              onChange={this.handleChange}
              margin="dense"
              id="email"
              label="Email"
              type="string"
              fullWidth
            />
            <TextField
              //   autoFocus
              value={this.state.password}
              onChange={this.handleChange}
              margin="dense"
              id="password"
              label="Password"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleFormSubmit}
              color="primary"
            >
              <Link to={"/artdocs/"}>LOGIN</Link>
            </Button>
            <Button
              onClick={this.handleFormSubmit}
              color="primary"
            >
              SIGN UP
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
