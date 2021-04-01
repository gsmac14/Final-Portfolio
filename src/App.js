import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css"
function App() {
  return (
    <Router>
    <div >
      <Navbar />
      <Switch>
      <Route path ="/About">
      <About />
      </Route>
      <Route path = "/Portfolio">
        <Portfolio />
      </Route>
      <Route path = "/Contact">
        <Contact />
      </Route>
      <Route path="/">
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>





  );
}

export default App;
