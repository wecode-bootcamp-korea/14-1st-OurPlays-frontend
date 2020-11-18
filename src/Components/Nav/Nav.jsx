import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='Nav'>
        <section className='nav-background'>
          <section className='main-nav'>
            <div className='logo-icon'>
              <Link to='/'>
                <img src='../images/youngjoonpark/hourplace-logo.svg' alt='logo-img' />
              </Link>
            </div>
            <div className='search-input'>
              <input type='text' placeholder='촬영의 모든 장소' />
              <img
                className='camera-icon'
                src='../images/youngjoonpark/camera-icon.svg'
                alt='camera-icon'
              />
              <img
                className='search-icon'
                src='../images/youngjoonpark/search-icon.png'
                alt='search-icon'
              />
            </div>
            <div className='nav-icons'>
              <Link className='nav-icon' to=''>
                아워플레이스 소개
              </Link>
              <Link className='nav-icon' to=''>
                촬영장소 등록하기
              </Link>
              <Link className='nav-icon' to=''>
                이용방법
              </Link>
              <Link className='nav-icon' to='/SignUp'>
                회원가입
              </Link>
              <Link className='nav-icon' to='/Login'>
                로그인
              </Link>
            </div>
          </section>
        </section>
        <div className='border-without-side'></div>
        <section className='side-nav'>
          <div className='direction'>
            <Link to='/' className='home'>
              Home
            </Link>
            <img src='../images/youngjoonpark/arrow-img.png' alt='' />
            <Link to='현재경로' className='route'>
              route
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Nav;
