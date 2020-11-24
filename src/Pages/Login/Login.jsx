import React, { Component } from 'react';
import './Login.scss';

const API = 'http://10.58.0.20:8000/user/signin';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      data: [],
    };
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick = (e) => {
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
        name: '백승진',
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    // .then((res) => this.setState({ data: res }));
    // // .then((res) => localStorage.setItem('token', res));
    // .then((res) => {
    //   if (res) {
    //     localStorage.setItem('token', res);
    //   }
    // });
  };

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
    const checkId = idValue.includes('@');
    const checkPw = pwValue.length >= 8 && pwValue.includes('@');
    if (checkId && checkPw && this.state.data) {
      alert('로그인 성공');
      // return this.props.history.push('/Main');
    }

    if (!checkId) {
      alert('이메일을 입력해주세요.');
    }

    if (!checkPw) {
      alert('비밀번호는 8자리 이상, 특수문자 포함입니다.');
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.checkValidation();
    }
  };

  sendToSignUp = (e) => {
    this.props.history.push('/Signup');
  };

  sendToMain = () => {
    this.props.history.push('/Main');
  };

  render() {
    const { idValue, pwValue } = this.state;
    const activateEmail = idValue.length >= 1 ? 'email-activate' : 'email-deactivate';
    const activatePw = pwValue.length >= 1 ? 'password-activate' : 'password-deactivate';

    return (
      <div className='Login'>
        <section className='login-header'>
          <img
            onClick={this.sendToMain}
            src='https://s3.hourplace.co.kr/web/images/logo_blue.svg'
            alt=''
          />
          <h1>로그인</h1>
        </section>
        <section className='login-body'>
          <div className='label'>
            <div className='email-label'>
              <span>이메일 주소</span>
              <input
                className={activateEmail}
                type='text'
                placeholder='이메일 주소를 입력해 주세요.'
                onChange={(e) => this.handleChangeEmail(e)}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className='password-label'>
              <span>비밀번호</span>
              <input
                className={activatePw}
                type='text'
                placeholder='비밀번호를 입력해 주세요.'
                onChange={this.handleChangePw}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className='maintain-login-label'>
              <input className='checkbox' type='checkbox' />
              <span>로그인 상태 유지</span>
            </div>
          </div>
        </section>
        <section className='login-footer'>
          <div className='login-button'>
            <button onKeyPress={this.checkValidation} onClick={() => this.handleClick()}>
              로그인
            </button>
          </div>
          <div className='manage-member'>
            <div onClick={this.sendToSignUp} className='sign-up'>
              <h1>회원가입</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
