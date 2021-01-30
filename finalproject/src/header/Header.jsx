import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
                <Link className="navbar__link" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/about">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/our-produce">
                  Our Produce
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/contact-us">
                  Contact Us
                </Link>
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
      </header>
    );
  }
}
