import React from "react";
import img1 from "../../images/icon-4.svg";
import "./timeTable.scss";

export class TimeTable extends React.Component {
  render() {
    return (
      <div className="global-footer__time-table time-table">
        <div className="time-table__col">
          <div className="time-table__img-wrapper">
            <img src={img1} alt={img1} className="time-table__img" />
          </div>
          <span className="time-table__adress">
            500 Terry Francois Street San Francisco, CA 94158
          </span>
          <span className="time-table__mail">info@mysite.com</span>
          <span className="time-table__adress">
            Tel: 123-456-7890 <br /> Fax: 123-456-7890
          </span>
        </div>
        <div className="time-table__col">
          <span className="time-table__col-title">Opening Hours</span>
          <span className="time-table__col-time">Mon - Fri: 8am - 8pm</span>
          <span className="time-table__col-time">​​Saturday: 9am - 7pm</span>
          <span className="time-table__col-time">​Sunday: 9am - 8pm</span>
        </div>
        <div className="time-table__col">
          <span className="time-table__col-title">Delivery Hours</span>
          <span className="time-table__col-time">Mon - Fri: 8am - 8pm</span>
          <span className="time-table__col-time">​​Saturday: 9am - 7pm</span>
          <span className="time-table__col-time">​Sunday: 9am - 8pm</span>
        </div>
      </div>
    );
  }
}
