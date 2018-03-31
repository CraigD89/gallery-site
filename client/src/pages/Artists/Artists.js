import React, {Component} from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./Artists.css";
// import API from "../../utils/API";

class Artists extends Component {

  // state = { artists };

  // componentDidMount() {
  //   this.loadArtists();
  // };

  // loadArtists = () => {
  //   API.getArtists()
  //     .then(res =>
  //       this.setState({ artists: res.data, name: "", location: "", website: "" })
  //     )
  //     .catch(err => console.log(err));
  //   };


  render() {
    return (
      <div>
      <Grid container spacing={0} className="artists">
        <Grid item xs={12} md={12}>
          <div>
            <h2>ARTISTS</h2>
            {/* {this.state.artists.map(artist => (
          <li
            id={artist._id}
            name={artist.name}
            location={artist.location}
          />
        ))}  */}
          </div>
        </Grid>
      </Grid>
    </div>
    );
};
}

export default Artists;


// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   }
//   // paper: {
//   //   padding: theme.spacing.unit * 2,
//   //   textAlign: "center",
//   //   color: theme.palette.text.secondary
//   // }
// });

// function FullWidthGrid(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={0} className="artists">
//         <Grid item xs={12} md={12}>
//           <div>
//             <h2>ARTISTS</h2>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// FullWidthGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(FullWidthGrid);
