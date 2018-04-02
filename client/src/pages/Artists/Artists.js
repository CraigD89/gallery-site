import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import "./Artists.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Artists extends Component {
  state = {
    artists: [],
    name: "",
    location: ""
  };

  componentDidMount() {
    this.loadArtists();
    console.log(this.state);
  }

  loadArtists = () => {
    API.getArtists()
      .then(res => this.setState({ artists: res.data, name: "", location: "" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Grid container spacing={0} className="artists">
          <Grid item xs={12} md={12}>
            <div>
              <h2>ARTISTS</h2>
              <div className="artistsList">
                {this.state.artists.length ? (
                  <div>
                    {this.state.artists.map(artist => (
                      <ul key={artist._id}>
                        <Link to={"/artists/" + artist._id}>
                          <h1>{artist.name}</h1>
                        </Link>
                      </ul>
                    ))}
                  </div>
                ) : (
                  <h3>Loading</h3>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Artists;
