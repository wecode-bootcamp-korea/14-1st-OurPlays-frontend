import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import Alert from "./components/Alert";
import { API } from "../../config";
import "./SignUp.scss";

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
      showClass: "alert alert-danger show",
      hideClass: "alert alert-danger hide",
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
        if (password !== rePassword) {
          setTimeout(() => {
            this.setState({
              isShow: true,
            });
          }, 1000);
        } else {
          localStorage.setItem("token", res.token);
        }
      });
  };

  render() {
    let _alert;
    if (this.state.password !== this.state.rePassword) {
      _alert = <Alert condition={this.state.isShow} />;
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
