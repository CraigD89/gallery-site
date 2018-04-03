import axios from "axios";

export default {
  getArtists: function() {
    return axios.get("/api/artists/");
  },
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  getUsers: function() {
    return axios.get("/api/user/");
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/user", userData);
  }
};
