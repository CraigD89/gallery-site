import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Home from "./pages/Home";
// import Artists from "./pages/Artists";
// import Info from "./pages/Info";
import Nav from "./components/Nav";

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/artists" component={Artists} /> */}
          {/* <Route exact path="/artists/:id" component={ArtistsDetail} /> */}
          {/* <Route exact path="/info" component={Info} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
