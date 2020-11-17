import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <section className="SignUp">
        <div className="sign-up-container">
          <h1>회원가입</h1>
          <div className="sign-up-form-wrap">
            <form action="post" className="sign-up-form">
              <div className="authenfication-wrap">
                <label
                  htmlFor="authenfication "
                  className="authenfication-title"
                >
                  <span> 본인인증</span>
                </label>
                <span className="authenfication-input">
                  <input
                    type="text"
                    id="authenfication"
                    placeholder="인증이 완료되었습니다."
                  />
                </span>
                <div className="checked-bg">
                  <i className="fas fa-check checked"></i>
                </div>
              </div>
              <div className="email-input-wrap">
                <label htmlFor="email" className="email-input-title">
                  <span> 이메일 주소</span>
                </label>
                <span className="email-user-input">
                  <input
                    type="text"
                    id="email"
                    placeholder="이메일 주소를 입력해주세요."
                  />
                </span>
              </div>
              <div className="password-input-wrap">
                <label className="password-input-title" htmlFor="password">
                  <span> 비밀번호</span>
                </label>
                <span className="password-user-input">
                  <input
                    type="text"
                    id="password"
                    placeholder="8-20자 이내 문자의 조합으로 입력해주세요."
                  />
                </span>
              </div>
              <div className="password-re-input-wrap">
                <label
                  className="password-re-input-title"
                  htmlFor="re-password"
                >
                  <span> 비밀번호 확인</span>
                </label>
                <span className="password-re-user-input">
                  <input
                    type="text"
                    id="re-password"
                    placeholder=" 8-20자 이내 문자의 조합으로 입력해주세요."
                  />
                </span>
              </div>
              <div className="register-path-wrap">
                <label className="register-path-title" htmlFor="path">
                  <div> 가입 경로</div>
                </label>
                <div className="register-path-input-wrap">
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" value="구글 검색" id="path" />
                        <span> 구글 검색</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="네이버 검색" id="path" />
                        <span> 네이버 검색</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input
                          type="checkbox"
                          value="네이버 블로그"
                          id="path"
                        />
                        <span> 네이버 블로그</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input
                          type="checkbox"
                          value="지인 추천/소개"
                          id="path"
                        />
                        <span> 지인 추천/소개</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="브런치" id="path" />
                        <span> 브런치</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="App 검색" id="path" />
                        <span> App 검색</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="인스타그램" id="path" />
                        <span> 인스타그램</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="페이스북" id="path" />
                        <span> 페이스북</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" value="네이버 검색" id="path" />
                        <span> 기타(직접 입력)</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="register-path-self-input-wrap">
                <span className="register-path-self-input">
                  <input
                    type="text"
                    id="register"
                    placeholder="기타 가입 경로를 입력해주세요."
                  />
                </span>
              </div>
              <div className="recommend-code-input-wrap">
                <label
                  className="recommend-code-input-title"
                  htmlFor="recommend"
                >
                  <span> 추천인 코드(선택)</span>
                </label>
                <div className="recommend-code-user-input-wrap">
                  <span className="recommend-code-user-input">
                    <input
                      type="text"
                      id="recommend"
                      placeholder=" 추천인 코드를 입력해주세요."
                    />
                  </span>
                  <span className="recommend-code-desc">
                    * 추천인 코드를 입력하시면, 첫 촬영 완료시 포인트를
                    적립해드립니다.
                  </span>
                </div>
              </div>
              <div className="terms-agree-wrap">
                <label className="terms-agree">
                  <div>
                    <input type="checkbox" value="약관 동의" id="term" />
                    <div> 아워플레이즈 서비스 약관 동의</div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="개인정보 처리방침"
                      id="term"
                    />
                    <div> 아워플레이즈 개인정보 처리방침</div>
                  </div>
                </label>
              </div>
              <div className="divider"></div>
              <div className="bottom-button-wrap">
                <input type="button" value="취소하기" />
                <input type="button" value="회원가입" />
              </div>
              <Link to="/" className="back-to-login">
                <div>로그인으로 돌아가기</div>
                <i class="fas fa-arrow-right"></i>
              </Link>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
