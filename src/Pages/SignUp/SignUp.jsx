import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import Alert from "./components/Alert";
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
    fetch(API, {
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
          console.log(res);
        }
      });
  };

  // alertFunc = () => {
  //   setTimeout(() => {
  //     console.log("Dd");
  //   }, 1000);
  // };

  render() {
    let _alert;
    if (this.state.password !== this.state.rePassword) {
      _alert = <Alert condition={this.state.isShow} />;
    }

    // if (this.state.password !== this.state.rePassword) {
    //   const propsForIcon = { className: "fas fa-exclamation-circle" };
    //   const icon = React.createElement(
    //     "i",
    //     propsForIcon,
    //     "비밀번호를 다시 확인해주세요."
    //   );
    //   const props = { className: "alert alert-danger" };
    //   showAlert = React.createElement("div", props, icon);
    //   console.log(showAlert);
    // }
    return (
      <section className="SignUp">
        {_alert}
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
