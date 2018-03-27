import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./Nav.css";
import IconButton from "material-ui/Icon";
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';

// import { Link } from "react-router-dom";

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
        {/* <Grid item xs={12} md={12}> */}
          {/* <div className="navigation"> */}
            <Grid item xs>
              <IconButton className={classes.icon} style={{ fontSize: 30 }}>
                view_headline
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <h1>EFRAIN LOPEZ GALLERY</h1>
            </Grid>
            <Grid item xs>
              <IconButton className={classes.icon} style={{ fontSize: 30 }}>
                account_circle
              </IconButton>
            </Grid>
          {/* </div> */}
        </Grid>
      {/* </Grid> */}
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
