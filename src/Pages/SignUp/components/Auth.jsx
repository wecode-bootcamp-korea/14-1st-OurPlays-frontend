import React, { Component } from "react";
import Alert from "./Alert";
import "./Auth.scss";

class Auth extends Component {
  state = {
    userNumber: "",
    userName: "",
    validation: "",
    isValided: false,
    isShow: false,
    failColor: "danger",
    message: "인증에 성공하였습니다.",
    successColor: "success",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toSubmit = () => {
    fetch("http://10.58.7.159:8000/user/authSMS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        phone_number: this.state.userNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  onHandleAuth = (e) => {
    this.setState({
      validation: e.target.value,
    });
  };

  toServer = () => {
    console.log(this.state.userNumber, this.state.validation);
    fetch(
      `http://10.58.7.159:8000/user/authSMS?phone_number=${this.state.userNumber}&auth_number=${this.state.validation}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.props.history.push("/SignUp");
      });
  };

  render() {
    return (
      <div className="Auth">
        <section className="login-header">
          <img
            src="https://s3.hourplace.co.kr/web/images/logo_blue.svg"
            alt="Login-img"
          />
          <h1> 문자 인증 </h1>
        </section>
        <section className="login-body">
          <div className="label">
            <div className="email-label">
              <div className="col">
                <input
                  type="text"
                  name="userName"
                  placeholder="이름을 입력해주세요."
                  className="name-auth"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="col auth">
                <input
                  type="tel"
                  name="userNumber"
                  placeholder="휴대폰 번호를 입력해 주세요."
                  className="sms-auth"
                  onChange={this.onChangeHandler}
                />
                <input
                  value="인증 번호 받기"
                  className="getAuth"
                  onClick={() => this.toSubmit()}
                />
              </div>
              <input
                type="tel"
                placeholder="인증번호를 입력해 주세요."
                className="check-auth"
                onChange={this.onHandleAuth}
              />
            </div>
          </div>
        </section>
        <section className="login-footer">
          <div className="sign-up">
            <input value="가입하기 " onClick={() => this.toServer()} />
          </div>
        </section>
      </div>
    );
  }
}

export default Auth;
