import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import "./SignUp.scss";

const API = "http://10.58.7.159:8000/user/signup";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
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
    console.log(email, name, password, rePassword, loginPath, anotherPath);
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
      .then((res) => console.log(res));

    // const updatedUser = [
    //   ...this.state.userInfo,
    //   { email, password, rePassword, loginPath, anotherPath },
    // ];
    // this.setState({
    //   userInfo: updatedUser,
    // });
  };

  componentDidMount() {
    // this.state.userInfo &&
  }
  render() {
    console.log(this.state.userInfo);
    return (
      <section className="SignUp">
        <div className="sign-up-container">
          <h1> 회원가입 </h1>
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
          />
        </div>
      </section>
    );
  }
}

export default SignUp;
