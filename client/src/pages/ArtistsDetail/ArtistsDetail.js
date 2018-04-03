import React, {Component} from "react";
import Grid from "material-ui/Grid";
import API from "../../utils/API";
import "./ArtistsDetail.css";

class ArtistsDetail extends Component {

state = {
  artist: {}
};

componentDidMount() {
  API.getArtist(this.props.match.params.id)
    .then(res => this.setState({ artist: res.data }))
    .catch(err => console.log(err));
};

  render(){
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className="artist">
              <h2>{this.state.artist.name}</h2>
              <img
                src={this.state.artist.imageURL}
                alt="art"
              />
              <h3>{this.state.artist.title}, {this.state.artist.year}</h3>
              <h3>{this.state.artist.materials}</h3>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="bio">
              <h2>BIO</h2>
              <div className="bioinfo">
              <p>{this.state.artist.bio}</p>
              </div>
            </div>
            <div className="news">
              <h2>NEWS</h2>
              <div className="newsFeed">
              <p>(COMING SOON)</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  }

  export default ArtistsDetail;

  

  

  
  