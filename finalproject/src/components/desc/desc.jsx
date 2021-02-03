import React from "react";
import { Button } from "../button/button";
import "./desc.scss";

export class Desc extends React.Component {
  render() {
    const btn = this.props.btn;
    const content = this.props.content;
    const list = [];

    for (let i = 0; i < content.length; i++) {
      let par = content[i];
      list.push(par);
    }

    function CheckBtn(props) {
      if (btn === "yes") {
        return <Button class="desc__btn" text="Join Our CSA" link="/" />;
      } else {
        return "";
      }
    }

    return (
      <div className="desc__wrapper">
        <div className="desc__content desc__col">
          <div className="desc__text">
            <h2 className="desc__title">{this.props.title}</h2>
            <hr className="desc__line" />
            {list.map((par) => {
              return <p className="desc__text">{par.content}</p>;
            })}
          </div>

          <CheckBtn btn={btn} />
        </div>
        <div className={this.props.picClass + " desc__img desc__col"}>
          <img
            src={this.props.img}
            alt={this.props.img}
            className="desc__picture"
          />
        </div>
      </div>
    );
  }
}
