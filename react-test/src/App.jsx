import React from "react";
import "./App.css";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { Page3 } from "./page3";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/page1">Home</Link>
          <Link to="/page2">page-2</Link>
          <Link to="/page3">page-3</Link>

          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="page2">
              <Page2 />
            </Route>
            <Route path="page3">
              <Page3 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
