import React from "react";
import { Parallax } from "react-parallax";
import "./parallaxFullWidth.scss";

export class ParallaxFullWidth extends React.Component {
  render() {
    return (
      <div className="full-width__parallax">
        <Parallax bgImage={this.props.img} strength={500}>
          <div className="full-width__parallax-col"></div>
        </Parallax>
      </div>
    );
  }
}
