import React from "react";
import { TimeTable } from "../components/timeTable/timeTable";

import "./Footer.scss";

export class Footer extends React.Component {
  render() {
    return (
      <div className="global-footer">
        <div className="global-footer__wrapper">
          <TimeTable />
          <div className="global-footer__mail"></div>
        </div>
      </div>
    );
  }
}
