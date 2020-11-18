import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footer-box'>
          <div className='munch-factory-icon'>
            <img src='../images/youngjoonpark/munch-factory.png' alt='munch-factory' />
          </div>
          <div className='footer-info'>
            <ul>
              <li>광고 및 제휴 문의</li>
              <li>1:1 고객문의</li>
              <li>인재채용</li>
              <li>개인정보 처리방침</li>
              <li>서비스 이용약관</li>
              <li>사업자 정보</li>
            </ul>
          </div>
          <div className='footer-icons'>
            <div className='footer-icon'>
              <img src='../images/youngjoonpark/facebook-icon.png' alt='facebook-icon' />
            </div>
            <div className='footer-icon'>
              <img src='../images/youngjoonpark/insta-icon.png' alt='instagram-icon' />
            </div>
            <div className='footer-icon'>
              <img src='../images/youngjoonpark/blog-icon.png' alt='blog-icon' />
            </div>
            <div className='footer-icon'>
              <img src='../images/youngjoonpark/brunch-icon.png' alt='brunch-icon' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
