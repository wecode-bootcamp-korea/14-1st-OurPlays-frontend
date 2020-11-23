import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegisterPath from "./RegisterPath";

const pathArray = [
  { ko: "구글 검색", en: "google" },
  { ko: "네이버 검색", en: "naver" },
  { ko: "네이버 블로그", en: "blog" },
  { ko: "지인 추천 / 소개", en: "recommend" },
  { ko: "브런치", en: "brunch" },
  { ko: "App 검색", en: "app" },
  { ko: "인스타그램", en: "instargram" },
  { ko: "페이스북", en: "facebook" },
  { ko: "기타(직접 입력", en: "etc" },
];

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    rePassword: "",
    anotherPath: "",
    name: "test",
    loginPath: {
      google: false,
      naver: false,
      blog: false,
      recommend: false,
      brunch: false,
      app: false,
      instagram: false,
      faceboook: false,
      etc: false,
    },
    recommend: "",
  };
  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onCheckRecommendPath = (e) => {
    const pathKey = e.target.name;
    const format = { ...this.state.loginPath };
    format[pathKey] = !format[pathKey];
    this.setState({ loginPath: format });
  };

  render() {
    const {
      email,
      password,
      rePassword,
      loginPath,
      anotherPath,
      name,
      recommend,
    } = this.state;

    return (
      <>
        <div className="sign-up-form-wrap">
          <form action="post" className="sign-up-form">
            <div className="authenfication-wrap">
              <label htmlFor="authenfication " className="authenfication-title">
                <span> 본인인증 </span>{" "}
              </label>{" "}
              <span className="authenfication-input">
                <input
                  type="text"
                  id="authenfication"
                  placeholder="인증이 완료되었습니다."
                  disabled="false"
                />
              </span>{" "}
              <div className="checked-bg">
                <i className="fas fa-check checked"> </i>{" "}
              </div>{" "}
            </div>{" "}
            <div className="email-input-wrap">
              <label htmlFor="email" className="email-input-title">
                <span> 이메일 주소 </span>{" "}
              </label>{" "}
              <span className="email-user-input">
                <input
                  type="text"
                  id="email"
                  value={email}
                  name="email"
                  placeholder="이메일 주소를 입력해주세요."
                  onChange={this.onChangeHandler}
                />{" "}
              </span>{" "}
            </div>{" "}
            <div className="password-input-wrap">
              <label className="password-input-title" htmlFor="password">
                <span> 비밀번호 </span>{" "}
              </label>{" "}
              <span className="password-user-input">
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="8-20자 이내 문자의 조합으로 입력해주세요."
                  onChange={this.onChangeHandler}
                />{" "}
              </span>{" "}
            </div>{" "}
            <div className="password-re-input-wrap">
              <label className="password-re-input-title" htmlFor="re-password">
                <span> 비밀번호 확인 </span>{" "}
              </label>{" "}
              <span className="password-re-user-input">
                <input
                  type="text"
                  id="re-password"
                  name="rePassword"
                  value={rePassword}
                  placeholder=" 8-20자 이내 문자의 조합으로 입력해주세요."
                  onChange={this.onChangeHandler}
                />{" "}
              </span>{" "}
            </div>{" "}
            <div className="register-path-wrap">
              <label className="register-path-title" htmlFor="path">
                <div> 가입 경로 </div>{" "}
              </label>{" "}
              <div className="register-path-input-wrap">
                <ul>
                  {" "}
                  {pathArray.map((path, idx) => {
                    return (
                      <RegisterPath
                        path={path}
                        idx={idx}
                        onCheckRecommendPath={this.onCheckRecommendPath}
                      />
                    );
                  })}{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="register-path-self-input-wrap">
              <span className="register-path-self-input">
                <input
                  type="text"
                  id="register"
                  name="anotherPath"
                  vlaue={anotherPath}
                  placeholder="기타 가입 경로를 입력해주세요."
                  disabled={loginPath.etc ? false : true}
                  onChange={this.onChangeHandler}
                />{" "}
              </span>{" "}
            </div>{" "}
            <div className="recommend-code-input-wrap">
              <label className="recommend-code-input-title" htmlFor="recommend">
                <span> 추천인 코드(선택) </span>{" "}
              </label>{" "}
              <div className="recommend-code-user-input-wrap">
                <span className="recommend-code-user-input">
                  <input
                    type="text"
                    id="recommend"
                    name="recommend"
                    value={recommend}
                    placeholder=" 추천인 코드를 입력해주세요."
                  />
                </span>{" "}
                <span className="recommend-code-desc">
                  * 추천인 코드를 입력하시면, 첫 촬영 완료시 포인트를
                  적립해드립니다.{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="terms-agree-wrap">
              <label className="terms-agree">
                <div>
                  <input type="checkbox" value="약관 동의" id="term" />
                  <div> 아워플레이즈 서비스 약관 동의 </div>{" "}
                </div>{" "}
                <div>
                  <input type="checkbox" value="개인정보 처리방침" id="term" />
                  <div> 아워플레이즈 개인정보 처리방침 </div>{" "}
                </div>{" "}
              </label>{" "}
            </div>{" "}
            <div className="divider"> </div>{" "}
            <div className="bottom-button-wrap">
              <input type="button" value="취소하기" />
              <input
                type="button"
                value="회원가입"
                onClick={() => {
                  this.props.onSubmitHandler(
                    email,
                    password,
                    rePassword,
                    loginPath,
                    anotherPath,
                    name
                  );
                  this.setState({
                    email: "",
                    password: "",
                    rePassword: "",
                    anotherPath: "",
                    name: "test",
                    loginPath: {
                      google: false,
                      naver: false,
                      blog: false,
                      recommend: false,
                      brunch: false,
                      app: false,
                      instagram: false,
                      faceboook: false,
                      etc: false,
                    },
                    recommend: "",
                  });
                }}
              />{" "}
            </div>{" "}
            <Link to="/" className="back-to-login">
              <div> 로그인으로 돌아가기 </div>{" "}
              <i class="fas fa-arrow-right"> </i>{" "}
            </Link>{" "}
          </form>{" "}
        </div>{" "}
      </>
    );
  }
}

export default SignUpForm;
