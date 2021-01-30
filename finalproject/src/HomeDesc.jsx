import React from "react";
import { Button } from "./button";
import "./home-desc.scss";
import aboutIcon from "./images/icon.svg";

export class HomeDesc extends React.Component {
  render() {
    return (
      <div className="about-home">
        <div className="about-home__wrapper">
          <div className="about-home__content about-home__col">
            <h2 className="about-home__title">
              Support Sustainable <br /> Farming
            </h2>
            <hr className="about-home__line" />
            <p className="about-home__text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <Button class="about-home__btn" text="Join Our CSA" />
          </div>
          <div className="about-home__img about-home__col">
            <img
              src={aboutIcon}
              alt={aboutIcon}
              className="about-home__picture"
            />
          </div>
        </div>
      </div>
    );
  }
}
