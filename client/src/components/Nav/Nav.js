import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import "./Nav.css";
import Grid from "material-ui/Grid";
import SideNav from "../SideNav/SideNav";
import Login from "../Login/Login";


const styles = theme => ({
  root: {
    flexGrow: 1
    },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className="navigation">
        <Grid item xs>
          <SideNav />
        </Grid>
        <Grid item xs={8}>
          <h2>EFRAIN LOPEZ GALLERY</h2>
        </Grid>
        <Grid item xs>
          <Login />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
