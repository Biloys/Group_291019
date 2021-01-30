import React from "react";
import "./products.scss";
import icon from "./images/icon-3.svg";
import { Fade } from "./slider";
import { Button } from "./button";

export class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <div className="products__wrapper">
          <div className="products__content">
            <h3 className="products__title">
              <hr className="products__line-title" /> Season's Produce
            </h3>
            <img src={icon} alt={icon} className="products__icon" />
            <div className="products__slider">
              <Fade pic={this.props.pic} />
            </div>
          </div>
          <div className="products__button">
            <Button
              class="products__btn"
              text="View All Produce"
              link="/our-produce"
            />
          </div>
        </div>
      </div>
    );
  }
}
