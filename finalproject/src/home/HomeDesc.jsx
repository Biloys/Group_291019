import React from "react";
import aboutIcon from "../images/icon.svg";
import { Desc } from "../components/desc/desc";
import "../scss/home-desc.scss";

const descTitle = "Support Sustainable Farming";
const descContent = [
  {
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
  },
];
export class HomeDesc extends React.Component {
  render() {
    return (
      <div className="about-home">
        <Desc
          title={descTitle}
          content={descContent}
          img={aboutIcon}
          picClass="desc__col_color1"
          btn="yes"
        />
      </div>
    );
  }
}
