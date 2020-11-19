import React, { Component } from 'react';
import './Footer.scss';
import FooterInfos from './Components/FooterInfos';
import FooterIcons from './Components/FooterIcons';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='footer-box'>
          <div className='munch-factory-icon'>
            <img src='../images/youngjoonpark/munch-factory.png' alt='munch-factory' />
          </div>
          <FooterInfos />
          <FooterIcons />
        </div>
      </div>
    );
  }
}

export default Footer;
