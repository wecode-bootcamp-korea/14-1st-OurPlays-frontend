import React, { Component } from "react";
import NAVICONS from "./Components/NavIcons";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = { isSticky: false, scrollY: 0 };
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll);
  }

  scroll = () => {
    const isSticky = window.scrollY > 5;
    this.setState({
      isSticky,
    });
  };

  render() {
    return (
      <nav>
        <section
          className={
            this.state.isSticky ? "nav-background sticky" : "nav-background"
          }
        >
          <section className="main-nav">
            <div className="logo-icon">
              <Link to="/">
                <img
                  src="https://s3.hourplace.co.kr/web/images/logo_blue.svg"
                  alt="logo-img"
                />
              </Link>
            </div>
            <div className="search-input">
              <input type="text" placeholder="촬영의 모든 장소" />
              <img
                className="camera-icon"
                src="https://s3.hourplace.co.kr/web/images/icon/camera.svg"
                alt="camera-icon"
              />
              <img
                className="search-icon"
                src="https://s3.hourplace.co.kr/web/images/ico_search.png"
                alt="search-icon"
              />
            </div>
            <NAVICONS Link="Link" />
          </section>
        </section>
        <div className="border-without-side"> </div>
      </nav>
    );
  }
}

export default Nav;
