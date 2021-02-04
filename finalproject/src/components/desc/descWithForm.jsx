import React from "react";
import "./descWithForm.scss";

export class DescWithForm extends React.Component {
  render() {
    return (
      <div className="desc__wrapper">
        <div className="desc__content desc__col desc__col_color2">
          <form className="desc-form">
            <h2 className="desc-form__title">
              For Any Inquiries, <br />
              Feel Free to Contact Us
            </h2>
            <div className="desc-form__wrapper">
              <div className="desc-form__field">
                <label htmlFor="firstName" className="desc-form__label">
                  Enter Your First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="desc-form__native-input"
                />
              </div>
              <div className="desc-form__field">
                <label htmlFor="lastName" className="desc-form__label">
                  Enter Your Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="desc-form__native-input"
                />
              </div>
            </div>
            <div className="desc-form__wrapper">
              <div className="desc-form__field">
                <label htmlFor="email" className="desc-form__label">
                  Enter Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="desc-form__native-input"
                />
              </div>
              <div className="desc-form__field">
                <label htmlFor="phone" className="desc-form__label">
                  Enter Your Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="desc-form__native-input"
                />
              </div>
            </div>
            <div className="desc-form__wrapper">
              <div className="desc-form__field">
                <label htmlFor="content" className="desc-form__label">
                  Type Your Message Here
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="desc-form__native-input desc-form__native-message"
                ></textarea>
                <button className="desc-form__btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="desc__img desc__col">
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
