import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./ArtDocs.css";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

class ArtDocs extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={0} className="docs">
          <Grid item xs={12} md={12}>
            <div>
              <h2>DOCUMENTATION</h2>
              <div className="docList">
                  <h2>(COMING SOON)</h2>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ArtDocs;
