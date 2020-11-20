import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }

  onSubmitHandler = (email, password, rePassword, loginPath, anotherPath) => {
    const updatedUser = [
      ...this.state.userInfo,
      { email, password, rePassword, loginPath, anotherPath },
    ];
    this.setState({
      userInfo: updatedUser,
    });
  };

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
              anotherPath
            ) => {
              this.onSubmitHandler(
                email,
                password,
                rePassword,
                loginPath,
                anotherPath
              );
            }}
          />
        </div>
      </section>
    );
  }
}

export default SignUp;
