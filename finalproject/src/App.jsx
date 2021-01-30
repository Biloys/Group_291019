import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { OurProduce } from "./OurProduce";
import { Blog } from "./Blog";
import { ContactUs } from "./ContactUs";
import { Header } from "./Header";
import { Footer } from "./Footer";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/our-produce">
            <OurProduce />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
