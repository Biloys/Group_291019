import React from "react";
import { Parallax, Background } from "react-parallax";
import "./HomeParallax.scss";
import img1 from "./images/img-4.webp";
import img2 from "./images/img-5.webp";

export class HomeParallax extends React.Component {
  render() {
    return (
      <div className="homeParallax">
        <div className="homeParallax__wrapper">
          <div className="homeParallax__col">
            <img className="homeParallax__pic" src={img1} alt={img1} />
          </div>
          <div className="homeParallax__col">
            <Parallax bgImage={img2} strength={250}>
              <div className="homeParallax__col_par"></div>
            </Parallax>
          </div>
        </div>
      </div>
    );
  }
}
