import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

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

function CurrentShow(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item sm={12} md={5}>
          <Paper className={classes.paper}>CURRENT SHOW</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CurrentShow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentShow);