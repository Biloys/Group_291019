import React from "react";
import { Fade } from "../components/slider/slider";
import { HomeDesc } from "./HomeDesc";
import { Products } from "./products";
import { Button } from "../components/button/button";
import { HomeParallax } from "./HomeParallax";
import { HomeBlog } from "./homeBlog";
import img1 from "../images/slider-1.webp";
import img2 from "../images/slider-2.webp";
import img3 from "../images/slider-3.webp";
import img4 from "../images/slider-4.webp";
import img5 from "../images/slider-5.webp";
import img6 from "../images/slider-6.webp";
import img7 from "../images/slider-7.webp";
import img8 from "../images/slider-8.webp";

export class Home extends React.Component {
  render() {
    const photos = [
      { name: "Photo-1", id: 1, url: img1 },
      { name: "Photo-2", id: 2, url: img2 },
      { name: "Photo-3", id: 3, url: img3 },
      { name: "Photo-4", id: 4, url: img4 },
    ];
    const photos2 = [
      { name: "Photo-1", id: 1, url: img5 },
      { name: "Photo-2", id: 2, url: img6 },
      { name: "Photo-3", id: 3, url: img7 },
      { name: "Photo-4", id: 4, url: img8 },
    ];

    const slider = photos.map((photo) => {
      return (
        <div>
          <img src={photo.url} alt={photo.name} />
        </div>
      );
    });
    const slider2 = photos2.map((photo) => {
      return (
        <div>
          <img src={photo.url} alt={photo.name} />
        </div>
      );
    });

    return (
      <div className="home-page">
        <div className="my-custom-fade">
          <div className="slider__content">
            <h2 className="slider__title">Welcome to Our Farm</h2>
            <h3 className="slider__subtitle">Fresh | Organic | Local</h3>

            <Button class="slider__button" text="Learn More" link="/about" />
          </div>
          <Fade pic={slider} />
        </div>

        <HomeDesc />
        <Products pic={slider2} />
        <HomeParallax />
        <HomeBlog />
      </div>
    );
  }
}
