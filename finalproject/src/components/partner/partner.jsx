import React from "react";
import "./partner.scss";

const partners = [
  "https://static.wixstatic.com/media/ad420a_15135caada8e4e61b5c8d68a50a33eea~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85/logos-02.webp",
  "https://static.wixstatic.com/media/ad420a_0b3bc4f4800f494b87db29a25674fe71~mv2.png/v1/fill/w_268,h_268,al_c,lg_1,q_85/logos-01.webp",
  "https://static.wixstatic.com/media/ad420a_ef9928ab1cd646c8a4eb4305eaa5268f~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85/logos-03.webp",
  "https://static.wixstatic.com/media/ad420a_628943c2fa11424da320a2a39e52501c~mv2.png/v1/fill/w_280,h_280,al_c,lg_1,q_85/logos-04.webp",
];

export class Partners extends React.Component {
  render() {
    return (
      <div className="partners-list">
        <div className="partners-list__wrapper">
          <div className="partners-list__text">
            <h1 className="partners-list__title">Where to Find Our Produce</h1>
            <hr className="partners-list__line" />
          </div>

          <div className="partners-list__link grid">
            {partners.map((el) => {
              return (
                <div className="col-3 partners-list__card">
                  <img className="partners-list__img" src={el} alt={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
