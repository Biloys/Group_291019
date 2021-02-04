import React from "react";
// import prodList from "./prodList";
import { Fade } from "../components/slider/slider";
import "../scss/ourProducts.scss";
// autumn images
import autumnImg1 from "../images/autumn1.webp";
import autumnImg2 from "../images/autumn2.webp";
import autumnImg3 from "../images/autumn3.webp";
import autumnImg4 from "../images/autumn4.webp";
import autumnImg5 from "../images/autumn5.webp";
// winter images
import winterImg1 from "../images/winter1.webp";
import winterImg2 from "../images/winter2.webp";
import winterImg3 from "../images/winter3.webp";
import winterImg4 from "../images/winter4.webp";
import winterImg5 from "../images/winter5.webp";

const setting = {
  accessibility: false,
  dots: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: false,
};

const autumn = [
  { img: autumnImg1, name: "Carrots" },
  { img: autumnImg2, name: "Brussels Sprouts" },
  { img: autumnImg3, name: "Apples" },
  { img: autumnImg4, name: "Cabbage" },
  { img: autumnImg5, name: "Kale" },
];
const winter = [
  { img: winterImg1, name: "Carrots" },
  { img: winterImg2, name: "Brussels Sprouts" },
  { img: winterImg3, name: "Apples" },
  { img: winterImg4, name: "Cabbage" },
  { img: winterImg5, name: "Kale" },
];

const slider = autumn.map((img) => {
  return (
    <div>
      <img src={img.img} alt={img.img} />
    </div>
  );
});
const slider2 = winter.map((img) => {
  return (
    <div>
      <img src={img.img} alt={img.img} />
    </div>
  );
});

export class OurProducts extends React.Component {
  render() {
    return (
      <div className="ourProducts__page">
        <div className="ourProducts__head">
          <div className="ourProducts__wrapper">
            <h2 className="ourProducts__title">This Season's Produce </h2>
            <h3 className="ourProducts__subtitle">
              Everything we grow is organic and changes seasonally
            </h3>
          </div>
        </div>
        <div className="ourProducts___grid">
          <div className="ourProducts__wrapper">
            <div className="ourProducts__list list grid">
              <div className="col-6 list__item">
                <div className="list__card">
                  <Fade pic={slider} setting={setting} />
                </div>
              </div>

              <div className="col-6 list__item">
                <div className="list__card">
                  <Fade pic={slider2} setting={setting} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
