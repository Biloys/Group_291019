import React from "react";
import { NavLink } from "react-router-dom";
import { ModalForm } from "../components/form/modalForm";
import logo from "../images/avatar.svg";
import iconJoin from "../images/icon-2.svg";
import "./header.scss";

export class Header extends React.Component {
  render() {
    return (
      <header className="global-header">
        <div className="global-header__logo">
          <div className="logo__wrapper">
            <h2 className="logo__title">
              <a href="/">Deerfield Farm</a>
            </h2>
            <h3 className="logo__subtitle">
              <a href="/">Season’s Best</a>
            </h3>
          </div>
        </div>
        <div className="global-header__content">
          <nav className="navbar">
            <button className="navbar__toggle"></button>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <NavLink className="navbar__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link_active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link_active"
                  to="/our-produce"
                >
                  Our Produce
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link_active"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  className="navbar__link"
                  activeClassName="navbar__link_active"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="login-wrapper">
            <a href="/" className="login-wrapper__link">
              <img src={logo} alt={logo} className="login-avatar" />
              Log In
            </a>
          </div>
        </div>
        <div className="global-header__join">
          <a href="/" className="join">
            <img src={iconJoin} alt={iconJoin} className="join__icon" />
            <span className="join__text">JOIN US</span>
          </a>
        </div>
        <ModalForm />
      </header>
    );
  }
}
