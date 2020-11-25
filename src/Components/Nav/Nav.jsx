import React, { Component } from "react";
import NAVICONS from "./Components/NavIcons";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <section className="nav-background">
          <section className="main-nav">
            <div className="logo-icon">
              <Link to="/">
                <img
                  src="../images/youngjoonpark/hourplace-logo.svg"
                  alt="logo-img"
                />
              </Link>
            </div>
            <div className="search-input">
              <input type="text" placeholder="촬영의 모든 장소" />
              <img
                className="camera-icon"
                src="../images/youngjoonpark/camera-icon.svg"
                alt="camera-icon"
              />
              <img
                className="search-icon"
                src="../images/youngjoonpark/search-icon.png"
                alt="search-icon"
              />
            </div>
            <NAVICONS Link="Link" />
          </section>
        </section>
        <div className="border-without-side"></div>
        <section className="side-nav">
          <div className="direction">
            <Link to="/" className="home">
              Home
            </Link>
            <img src="../images/youngjoonpark/arrow-img.png" alt="arrow-img" />
            <Link to="현재경로" className="route">
              route
            </Link>
          </div>
        </section>
      </nav>
    );
  }
}

export default Nav;
