import React, {Component} from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
// import API from "../../utils/API";
import "./ArtistsDetail.css";


class ArtistsDetail extends Component {
  render(){
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className="artist">
              <h2>ARTIST NAME</h2>
              {/* <img
                src="https://i.imgur.com/Ma5rxnt.jpg"
                alt="art"
              /> */}
              <h2>(INSERT WORK)</h2>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="bio">
              <h2>BIO</h2>
            </div>
            <div className="news">
              <h2>NEWS</h2>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  }

  export default ArtistsDetail;

  

  

  
  