import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Nav.scss";

class NavIcons extends Component {
  render() {
    return (
      <div className="nav-icons">
        {" "}
        {NAVICONS.map((navIcon) => {
          return (
            <Link key={navIcon.id} className="nav-icon" to={navIcon.linkTo}>
              {" "}
              {navIcon.name}{" "}
            </Link>
          );
        })}{" "}
      </div>
    );
  }
}

export default NavIcons;

const NAVICONS = [
  {
    id: 0,
    name: "아워플레이스 소개",
    linkTo: "/Introduce",
  },
  {
    id: 1,
    name: "촬영장소 등록하기",
    linkTo: "/Register",
  },
  {
    id: 2,
    name: "이용방법",
    linkTo: "/howToUse",
  },
  {
    id: 3,
    name: "회원가입",
    linkTo: "/SignUp",
  },
  {
    id: 4,
    name: "로그인",
    linkTo: "/Login",
  },
];
