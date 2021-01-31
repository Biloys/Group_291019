import React from "react";
import { TimeTable } from "../components/timeTable/timeTable";
import { FormMail } from "../components/formMail/formMail";

import "./Footer.scss";

export class Footer extends React.Component {
  render() {
    return (
      <div className="global-footer">
        <div className="global-footer__wrapper">
          <TimeTable />
          <FormMail />
          <div className="global-footer__social">
            <ul className="social__items">
              <li className="social__item">
                <a href="/" className="social__link">
                  Facebook
                </a>
              </li>
              <li className="social__item">
                <a href="/" className="social__link">
                  Twitter
                </a>
              </li>
              <li className="social__item">
                <a href="/" className="social__link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
