import React from "react";
import "./formMail.scss";

export class FormMail extends React.Component {
  render() {
    return (
      <div className="global-footer__mail">
        <form className="form-mail">
          <h3 className="form-mail__title">
            Get the Latest News & <br /> Updates from Our Farm
          </h3>
          <div className="form-mail__field">
            <label className="form-mail__label">
              <span className="form-mail__native-label">
                Enter you emaul here * *
              </span>
              <input
                className="form-mail__native-input"
                required
                type="email"
                placeholder="Email"
              />
            </label>
            <input className="form-mail__btn" type="submit" value="Join" />
          </div>
        </form>
      </div>
    );
  }
}
