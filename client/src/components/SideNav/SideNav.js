import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

const styles = {
  list: {
    width: 1000,
    textAlign: "center"
  },
  fullList: {
    width: "150px",
    textAlign: "center"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <Button href="/">HOME</Button>
        <Button href="/artists">ARTISTS</Button>
        <Button disabled>EXHIBITIONS</Button>
        <Button disabled>FAIRS</Button>
        <Button disabled>NEWS</Button>
        <Button href="/contact">CONTACT</Button>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("left", true)}>MENU</Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
