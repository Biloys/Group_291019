import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { OurProduce } from "./ourproducts/OurProduce";
import { Blog } from "./blog/Blog";
import { ContactUs } from "./contact/ContactUs";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

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
