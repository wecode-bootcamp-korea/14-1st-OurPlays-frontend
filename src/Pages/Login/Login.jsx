/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const API = "http://10.58.6.206:8000/user/signin";

class Login extends Component {
  state = {
    data: [],
  };
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  checkValidation = (e) => {
    // e.preventDefault();
    const { idValue, pwValue } = this.state;
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          alert(res.message);
          this.props.history.push("/Main");
        } else {
          alert(res.message);
        }
      });
  };

  handleChangeEmail = (e) => {
    const { value } = e.target;
    this.setState({ idValue: value });
  };

  handleChangePw = (e) => {
    const { value } = e.target;
    this.setState({ pwValue: value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  sendToSignUp = (e) => {
    this.props.history.push("/Signup");
  };

  sendToMain = () => {
    this.props.history.push("/Main");
  };

  render() {
    const { idValue, pwValue } = this.state;
    const activateEmail =
      idValue.length >= 1 ? "email-activate" : "email-deactivate";
    const activatePw =
      pwValue.length >= 1 ? "password-activate" : "password-deactivate";

    return (
      <div className="Login">
        <section className="login-header">
          <img
            onClick={this.sendToMain}
            src="https://s3.hourplace.co.kr/web/images/logo_blue.svg"
            alt="Login-img"
          />
          <h1> 로그인 </h1>
        </section>
        <section className="login-body">
          <div className="label">
            <div className="email-label">
              <span> 이메일 주소 </span>
              <input
                className={activateEmail}
                type="text"
                placeholder="이메일 주소를 입력해 주세요."
                onChange={(e) => this.handleChangeEmail(e)}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="password-label">
              <span> 비밀번호 </span>
              <input
                className={activatePw}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={this.handleChangePw}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="maintain-login-label">
              <input className="checkbox" type="checkbox" />
              <span> 로그인 상태 유지 </span>
            </div>
          </div>
        </section>
        <section className="login-footer">
          <div className="login-button">
            <button
              onKeyPress={this.checkValidation}
              onClick={this.checkValidation}
            >
              로그인
            </button>
          </div>
          <div className="manage-member">
            <div onClick={this.sendToSignUp} className="sign-up">
              <h1> 회원가입 </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
