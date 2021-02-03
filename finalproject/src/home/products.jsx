import React from "react";
import "../scss/products.scss";
import icon from "../images/icon-3.svg";
import { Fade } from "../components/slider/slider";
import { Button } from "../components/button/button";

export class Products extends React.Component {
  render() {
    const title = this.props.title;
    const btn = this.props.btn;

    function CheckTitle(props) {
      if (title) {
        return (
          <h3 className="products__title">
            <hr className="products__line-title" /> {title}
          </h3>
        );
      } else {
        return "";
      }
    }

    function CheckBtn(props) {
      if (btn === "yes") {
        return (
          <div className="products__button">
            <Button
              class="products__btn"
              text="View All Produce"
              link="/our-produce"
            />
          </div>
        );
      } else {
        return "";
      }
    }
    return (
      <div className="products">
        <div className="products__wrapper">
          <div className="products__content">
            <CheckTitle title={title} />
            <img src={icon} alt={icon} className="products__icon" />
            <div className="products__slider">
              <Fade pic={this.props.pic} setting={this.props.setting} />
            </div>
          </div>
          <CheckBtn btn={btn} />
        </div>
      </div>
    );
  }
}
