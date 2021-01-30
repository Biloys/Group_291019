import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./button.scss";

export class Button extends React.Component {
  render() {
    return (
      <Link className={"button " + this.props.class} to={this.props.link}>
        {this.props.text}
      </Link>
    );
  }
}
