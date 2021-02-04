import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

export class Fade extends React.Component {
  render() {
    // const settings = {
    //   accessibility: false,
    //   dots: true,
    //   arrows: false,
    //   fade: true,
    //   infinite: true,
    //   speed: 1500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   pauseOnHover: false,
    // };
    const settingsCustom = this.props.setting;
    return <Slider {...settingsCustom}>{this.props.pic}</Slider>;
  }
}
