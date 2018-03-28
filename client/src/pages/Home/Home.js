import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./Home.css";
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
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div className="current">
            <h2>CURRENT EXHIBITION</h2>
            <img
              src="https://i.imgur.com/Ma5rxnt.jpg"
              alt="art"
            />
            <h2>ALEJANDRO JIMENEZ-FLORES</h2>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="news">
            <h2>NEWS</h2>
          </div>
          <div className="upcoming">
            <h2>UPCOMING</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
