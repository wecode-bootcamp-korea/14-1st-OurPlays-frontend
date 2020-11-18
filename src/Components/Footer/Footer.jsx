import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footer-box'>
          <div className='munch-factory-icon'>
            <img src='../images/youngjoonpark/munch-factory.png' alt='munch-factory' />
          </div>
          <div className='footer-informations'>
            <Link className='footer-info' to=''>
              광고 및 제휴 문의
            </Link>
            <Link className='footer-info' to=''>
              1:1 고객문의
            </Link>
            <Link className='footer-info' to=''>
              인재채용
            </Link>
            <Link className='footer-info' to=''>
              개인정보 처리방침
            </Link>
            <Link className='footer-info' to=''>
              서비스 이용약관
            </Link>
            <Link className='footer-info' to=''>
              사업자 정보
            </Link>
          </div>
          <div className='footer-icons'>
            <div className='footer-icon'>
              <a target='_blank' href='https://www.facebook.com/Hourplace-1170061373140648'>
                <img src='../images/youngjoonpark/facebook-icon.png' alt='facebook-icon' />
              </a>
            </div>
            <div className='footer-icon'>
              <a target='_blank' href='https://www.instagram.com/hourplace/?hl=ko'>
                <img src='../images/youngjoonpark/insta-icon.png' alt='instagram-icon' />
              </a>
            </div>
            <div className='footer-icon'>
              <a target='_blank' href='https://blog.naver.com/hourplace'>
                <img src='../images/youngjoonpark/blog-icon.png' alt='blog-icon' />
              </a>
            </div>
            <div className='footer-icon'>
              <a target='_blank' href=''>
                <img src='../images/youngjoonpark/brunch-icon.png' alt='brunch-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
