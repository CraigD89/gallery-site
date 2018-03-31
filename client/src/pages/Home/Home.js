import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./Home.css";
// import API from "../../utils/API";

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
            <div className="currentInfo">
            <img src="https://i.imgur.com/Ma5rxnt.jpg" alt="art" />
            <h2>ALEJANDRO JIMENEZ-FLORES</h2>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="news">
            <h2>NEWS</h2>
            <div className="newsFeed">
              <p>Efrain Lopez Gallery and Anuar Maauad featured on CSS</p>
              <p>Anuar Maauad's EXPO presentation featured on GRAZIA</p>
              <p>
                Gabriela Salazar's 'Eye of Palm' reviewed in The Brooklyn Rail
              </p>
            </div>
          </div>
          <div className="upcoming">
            <h2>UPCOMING</h2>
            <div className="upcomingFeed">
              <p>LISA KIRK</p>
              <p>EXPO CHICAGO</p>
              <p>ART BASEL MIAMI</p>
            </div>
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
