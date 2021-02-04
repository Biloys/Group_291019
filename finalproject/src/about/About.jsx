import React from "react";
import { ParallaxFullWidth } from "../components/parallax-full-width/parallax-full-width";
import img from "../images/img-6.webp";
import icon from "../images/icon-5.svg";
import { Desc } from "../components/desc/desc";
import { Products } from "../home/products";
import "../scss/about.scss";

import img1 from "../images/slider-9.webp";
import img2 from "../images/slider-10.webp";
import img3 from "../images/slider-11.webp";
import img4 from "../images/slider-12.webp";
import img5 from "../images/slider-13.webp";

const photos = [
  { name: "Photo-1", id: 1, url: img1 },
  { name: "Photo-2", id: 2, url: img2 },
  { name: "Photo-3", id: 3, url: img3 },
  { name: "Photo-4", id: 4, url: img4 },
  { name: "Photo-5", id: 5, url: img5 },
];

const slider = photos.map((photo) => {
  return (
    <div>
      <img src={photo.url} alt={photo.name} />
    </div>
  );
});

const descTitle = "Our Story";
const descContent = [
  {
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    content:
      "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
  },
];
const setting = {
  accessibility: false,
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
};

export class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <ParallaxFullWidth img={img} />
        <Desc
          title={descTitle}
          content={descContent}
          img={icon}
          picClass="desc__col_color2"
        />
        <Products pic={slider} setting={setting} />
      </div>
    );
  }
}
