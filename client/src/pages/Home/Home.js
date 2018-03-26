import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
// import Paper from 'material-ui/Paper';
import Grid from "material-ui/Grid";
import "./Home.css";
// import { Link } from "react-router-dom";
// import CurrentShow from "./CurrentShow/CurrentShow";
// import News from "./News/News";
// import Upcoming from "./Upcoming/Upcoming";

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
            <h1>CURRENT EXHIBITION</h1>
            <img src="https://i.imgur.com/oLBgYdk.jpg" alt="art" />
            <h1>MELISSA LEANDRO</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="news">
            <h1>NEWS</h1>
          </div>
          <div className="upcoming">
            <h1>UPCOMING</h1>
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