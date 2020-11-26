import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import Alert from "./components/Alert";
import { API } from "../../config";
import "./SignUp.scss";

let _alert;
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      email: "",
      password: "",
      rePassword: "",
      loginPath: "",
      anotherPath: "",
      name: "",
      isShow: false,
      passwordBoolean: false,
      emailBoolean: false,
      existBoolean: false,
      successBoolean: false,
      passwordError: "비밀번호를 확인해주세요.",
      emailError: "이메일을 확인해주세요.",
      existError: "중복된 이메일입니다.",
      successMessage: "회원가입을 축하합니다.",
      failColor: "danger",
      successColor: "success",
    };
    this.alertRef = React.createRef();
  }

  onSubmitHandler = (
    email,
    password,
    rePassword,
    loginPath,
    anotherPath,
    name
  ) => {
    if (this.state.passwordBoolean) {
      setTimeout(() => {
        this.setState({
          isShow: true,
          passwordBoolean: false,
          emailBoolean: false,
          existBoolean: false,
          successBoolean: false,
        });
      }, 1000);
    }
    this.setState({
      email,
      password,
      rePassword,
      loginPath,
      anotherPath,
      name,
      isShow: false,
    });
    fetch(`${API}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        rePassword: rePassword,
        loginPath: loginPath,
        anotherPath: anotherPath,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "BAD_EMAIL_REQUEST") {
          this.setState({ emailBoolean: true, isShow: true });
        }
        if (res.message === "INVALID_PASSWORD") {
          this.setState({ passwordBoolean: true, isShow: true });
        }
        if (res.message === "EXISTS_USER") {
          this.setState({ existBoolean: true, isShow: true });
        }
        if (res.message === "SUCCESS") {
          this.setState({ successBoolean: true, isShow: true });
          this.props.history.push("/login");
        }
      });
  };

  render() {
    if (this.state.passwordBoolean) {
      _alert = (
        <Alert
          condition={this.state.isShow}
          message={this.state.passwordError}
          color={this.state.failColor}
        />
      );
    }
    if (this.state.emailBoolean) {
      _alert = (
        <Alert
          condition={this.state.isShow}
          message={this.state.emailError}
          color={this.state.failColor}
        />
      );
    }
    if (this.state.existBoolean) {
      _alert = (
        <Alert
          condition={this.state.isShow}
          message={this.state.existError}
          color={this.state.failColor}
        />
      );
    }
    if (this.state.successBoolean) {
      _alert = (
        <Alert
          condition={this.state.isShow}
          message={this.state.successMessage}
          color={this.state.successColor}
        />
      );
    }

    return (
      <section className="SignUp">
        {" "}
        {_alert}{" "}
        <div className="sign-up-container">
          <h1> 회원가입 </h1>{" "}
          <SignUpForm onSubmitHandler={this.onSubmitHandler} />{" "}
        </div>{" "}
      </section>
    );
  }
}

export default SignUp;
