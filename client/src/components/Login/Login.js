import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
//   DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
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
          {/* <DialogTitle id="form-dialog-title">LOGIN</DialogTitle> */}
          <DialogContent>
            {/* <DialogContentText>
              Blahlsahdlkajsxlca
            </DialogContentText> */}
            <TextField
            //   autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="string"
              fullWidth
            />
            <TextField
            //   autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="string"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              LOGIN
            </Button>
            <Button onClick={this.handleClose} color="primary">
              SIGN UP
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}