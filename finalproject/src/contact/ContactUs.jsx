import React from "react";
import { ParallaxFullWidth } from "../components/parallax-full-width/parallax-full-width";
import img from "../images/img-7.webp";
import icon from "../images/icon-6.svg";
import { DescWithForm } from "../components/desc/descWithForm";
import { Partners } from "../components/partner/partner";

import "../scss/contact.scss";

export class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <ParallaxFullWidth img={img} />
        <DescWithForm img={icon} picClass="desc__col_color2" />
        <Partners />
      </div>
    );
  }
}
