import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  handleChangeEmail = (e) => {
    const { value } = e.target;
    this.setState({ idValue: value });
  };

  handleChangePw = (e) => {
    const { value } = e.target;
    this.setState({ pwValue: value });
  };

  checkValidation = () => {
    const { idValue, pwValue } = this.state;
    const checkId = idValue.includes("@");
    const checkPw = pwValue.length >= 8;
    if (checkId && checkPw) {
      alert("로그인 성공");
      return this.props.history.push("/Main");
    }

    if (!checkId) {
      alert("이메일을 입력해주세요.");
    }

    if (!checkPw) {
      alert("비밀번호는 8자리 이상입니다.");
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  render() {
    const { idValue, pwValue } = this.state;
    console.log(idValue, pwValue);
    const activateEmail =
      idValue.length >= 1 ? "email-activate" : "email-deactivate";
    const activatePw =
      pwValue.length >= 1 ? "password-activate" : "password-deactivate";

    return (
      <div className="Login">
        <section className="login-header">
          <h1> 로그인 </h1>{" "}
        </section>{" "}
        <section className="login-body">
          <div className="label">
            <div className="email-label">
              <span> 이메일 주소 </span>{" "}
              <input
                className={activateEmail}
                type="text"
                placeholder="이메일 주소를 입력해 주세요."
                onChange={(e) => this.handleChangeEmail(e)}
                onKeyPress={this.handleKeyPress}
              />{" "}
            </div>{" "}
            <div className="password-label">
              <span> 비밀번호 </span>{" "}
              <input
                className={activatePw}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={this.handleChangePw}
                onKeyPress={this.handleKeyPress}
              />{" "}
            </div>{" "}
            <div className="maintain-login-label">
              <input className="checkbox" type="checkbox" />
              <span> 로그인 상태 유지 </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="login-footer">
          <div className="login-button">
            <button onClick={this.checkValidation}> 로그인 </button>{" "}
          </div>{" "}
          <div className="manage-member">
            <Link to="./SignUp/SignUp" className="sign-up">
              회원가입{" "}
            </Link>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    );
  }
}

export default Login;
