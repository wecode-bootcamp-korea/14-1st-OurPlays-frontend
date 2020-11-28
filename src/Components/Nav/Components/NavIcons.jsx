/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Nav.scss";

class NavIcons extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  componentDidMount() {
    const isToken = localStorage.setItem("token");
    if (isToken) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
  }

  render() {
    return (
      <div className="nav-icons">
        {this.state.login ? (
          <Link className="nav-icon" to="/">
            아워플레이스 소개
          </Link>
        ) : (
          <Link className="nav-icon" to="/">
            아워플레이스 소개
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/">
            관심장소
          </Link>
        ) : (
          <Link className="nav-icon" to="/">
            관심장소
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/">
            예약관리
          </Link>
        ) : (
          <Link className="nav-icon" to="/">
            예약관리
          </Link>
        )}
        {this.state.login ? (
          <Link className="nav-icon" to="/SignUp">
            회원가입
          </Link>
        ) : (
          <Link className="nav-icon" to="/SignUp">
            회원가입
          </Link>
        )}
        {this.state.login ? (
          <Link onClick={this.changeMode} className="nav-icon" to="/">
            로그아웃
          </Link>
        ) : (
          <Link className="nav-icon" to="/Login">
            로그인
          </Link>
        )}
      </div>
    );
  }
}

export default NavIcons;
