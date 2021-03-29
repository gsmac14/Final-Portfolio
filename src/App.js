import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/">
      <Landing />
      </Route>
      <Route exact path ="/About">
      <About />
      </Route>
      <Route exact path = "/Portfolio">
        <Portfolio />
      </Route>
      </Switch>
    </div>
    </Router>





  );
}

export default App;
