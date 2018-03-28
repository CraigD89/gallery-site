import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
// import Paper from 'material-ui/Paper';
import Grid from "material-ui/Grid";
import "./Contact.css";
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
          <div className="contact">
            <h2>ABOUT</h2>
            <h4>
              Efrain Lopez Gallery is a contemporary art gallery in Chicago, IL.
              The gallery is committed to showcasing work by emerging and
              established visual artists that is visually engaging and
              conceptually captivating. A wide range of media is represented in
              the gallery's curatorial program.
            </h4>
          </div>
          <div className="contact">
            <h2>ADDRESS</h2>
            <h4>908 North Ashland Avenue</h4>
            <h4>Chicago, IL 60622</h4>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="contact">
            <h2>HOURS</h2>
            <h4>Wednesday - Friday 12pm- 5pm</h4>
            <h4>Saturday 12pm - 4pm</h4>
            <h4>by appointment</h4>
          </div>
          <div className="contact">
            <h2>CONTACT</h2>
            <h4>info@efrainlopezgallery.com</h4>
            <h4>+1.312.783.1084</h4>
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
