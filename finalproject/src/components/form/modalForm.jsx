import React from "react";

import "./modalForm.scss";

function Submit(e) {
  e.preventDefault();
  console.log("Форма отправлена");
}

export class ModalForm extends React.Component {
  render() {
    return (
      <div className="modal">
        <button className="modal__close" onClick={this.Close}></button>
        <div className="modal__wrapper">
          <form className="modal-form">
            <h2 className="desc-form__title">
              Join Our Farm CSA <br />
              Program
            </h2>
            <div className="desc-form__wrapper">
              <div className="desc-form__field">
                <label htmlFor="firstName" className="desc-form__label">
                  Enter Your First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  className="desc-form__native-input modal__native-input"
                />
              </div>
              <div className="desc-form__field">
                <label htmlFor="lastName" className="desc-form__label">
                  Enter Your Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  className="desc-form__native-input modal__native-input"
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
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="desc-form__native-input modal__native-input"
                  required
                />
              </div>
              <div className="desc-form__field">
                <label htmlFor="phone" className="desc-form__label">
                  Enter Your Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  className="desc-form__native-input modal__native-input"
                />
              </div>
            </div>
            <div className="desc-form__wrapper">
              <div className="desc-form__field">
                <label htmlFor="city" className="desc-form__label">
                  Enter Your City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  id="city"
                  className="desc-form__native-input modal__native-input"
                />
              </div>
              <div className="desc-form__field">
                <label htmlFor="state" className="desc-form__label">
                  Enter Your State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  id="state"
                  className="desc-form__native-input modal__native-input"
                />
              </div>
            </div>
            <div className="modal__radios">
              <h2 className="modal__radio-title">
                Choose the package that Fits your Family *
              </h2>
              <label htmlFor="radio1" className="modal__radio-label">
                <input
                  type="radio"
                  value="Weekly"
                  name="package"
                  id="radio1"
                  required
                />
                Weekly Share
              </label>
              <label htmlFor="radio2" className="modal__radio-label">
                <input
                  type="radio"
                  value="Bi-Weekly"
                  required
                  name="package"
                  id="radio2"
                />
                Bi-Weekly Share
              </label>
              <label htmlFor="radio3" className="modal__radio-label">
                <input
                  type="radio"
                  value="Family"
                  name="package"
                  id="radio3"
                  required
                />
                Wholesome Family Package
              </label>
            </div>
            <div className="desc-form__wrapper">
              <button
                className="desc-form__btn modal__btn"
                type="submit"
                id="modalSubmit"
                onClick={Submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
