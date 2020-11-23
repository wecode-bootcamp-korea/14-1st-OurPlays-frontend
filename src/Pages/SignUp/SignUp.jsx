import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import "./SignUp.scss";

const API = "http://10.58.7.159:8000/user/signup";
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
    };
  }

  onSubmitHandler = (
    email,
    password,
    rePassword,
    loginPath,
    anotherPath,
    name
  ) => {
    this.setState({
      email,
      password,
      rePassword,
      loginPath,
      anotherPath,
      name,
    });
  };

  // onSubmitHandler = (
  //   email,
  //   password,
  //   rePassword,
  //   loginPath,
  //   anotherPath,
  //   name
  // ) => {
  //   fetch(API, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       rePassword: rePassword,
  //       loginPath: loginPath,
  //       anotherPath: anotherPath,
  //       name: name,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  render() {
    if (this.state.password !== this.state.rePassword) {
      setTimeout(() => {}, 1000);
    }
    return (
      <section className="SignUp">
        {/* <div className="alert alert-danger show">
          <i className="fas fa-exclamation-circle"></i>
          비밀번호를 다시 확인해주세요.
        </div> */}
        <div className="sign-up-container">
          <h1> 회원가입 </h1>{" "}
          <SignUpForm
            onSubmitHandler={(
              email,
              password,
              rePassword,
              loginPath,
              anotherPath,
              name
            ) => {
              this.onSubmitHandler(
                email,
                password,
                rePassword,
                loginPath,
                anotherPath,
                name
              );
            }}
          />{" "}
        </div>{" "}
      </section>
    );
  }
}

export default SignUp;
