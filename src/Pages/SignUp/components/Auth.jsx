import React, { Component } from "react";
import "./Auth.scss";

class Auth extends Component {
  state = {
    userNumber: "",
    userName: "",
  };

  onChangeName = () => {};
  render() {
    return (
      <div className="Auth">
        <section className="login-header">
          <img
            src="https://s3.hourplace.co.kr/web/images/logo_blue.svg"
            alt="Login-img"
          />
          <h1> 문자 인증 </h1>{" "}
        </section>{" "}
        <section className="login-body">
          <div className="label">
            <div className="email-label">
              <div className="col">
                <span>  이름 </span>{" "}
                <input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  className="name-auth"
                  onChange={this.onChangeName}
                />{" "}
              </div>{" "}
              <div className="col">
                <span> 문자 인증 </span>{" "}
                <input
                  type="tel"
                  placeholder="휴대폰 번호를 입력해 주세요."
                  className="sms-auth"
                  onChange={this.on}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="login-footer">
          <div className="login-button">
            <button> 인증 번호 받기 </button>{" "}
          </div>{" "}
          <div className="manage-member">
            <div className="sign-up">
              <h1> 로그인 </h1>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    );
  }
}

export default Auth;
