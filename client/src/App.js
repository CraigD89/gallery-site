import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";



const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <Nav />
        {/* <Wrapper> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists" component={Artists} />
            {/* <Route exact path="/artists/:id" component={ArtistsDetail} /> */}
            <Route exact path="/contact" component={Contact} />
          </Switch>
        {/* </Wrapper> */}
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
