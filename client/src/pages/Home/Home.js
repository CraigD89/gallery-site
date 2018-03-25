import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import { Link } from "react-router-dom";
// import CurrentShow from "./CurrentShow/CurrentShow";
// import News from "./News/News";
// import Upcoming from "./Upcoming/Upcoming";

// const Home = () => (
//   <div>
//     {/* <Nav /> */}
//     {/* <CurrentShow />
//     <News />
//     <Upcoming /> */}
//   </div>
// );

// export default Home;


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>CURRENT</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>NEWS</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>UPCOMING</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);