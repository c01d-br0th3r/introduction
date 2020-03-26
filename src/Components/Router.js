import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Router/Home";

export default () => (
  <Router>
    <Route exact path="/home" component={Home} />
  </Router>
);
