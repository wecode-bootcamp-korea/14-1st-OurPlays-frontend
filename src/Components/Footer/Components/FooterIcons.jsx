import React, { Component } from 'react';
import '../Footer.scss';

const FOOTERICONS = [
  {
    id: '0',
    href: 'https://www.facebook.com/Hourplace-1170061373140648',
    src: '../images/youngjoonpark/facebook-icon.png',
    alt: 'facebook-icon',
  },
  {
    id: '1',
    href: 'https://www.instagram.com/hourplace/?hl=ko',
    src: '../images/youngjoonpark/insta-icon.png',
    alt: 'instagram-icon',
  },
  {
    id: '2',
    href: 'https://blog.naver.com/hourplace',
    src: '../images/youngjoonpark/blog-icon.png',
    alt: 'blog-icon',
  },
  {
    id: '3',
    href: 'https://brunch.co.kr/@hourplace#articles',
    src: '../images/youngjoonpark/brunch-icon.png',
    alt: 'brunch-icon',
  },
];

class FooterIcons extends Component {
  render() {
    return (
      <div className='footer-icons'>
        {FOOTERICONS.map((footerIcons) => {
          return (
            <div className='footer-icon'>
              <a target='_blank' href={footerIcons.href}>
                <img src={footerIcons.src} alt={footerIcons.alt} />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FooterIcons;
