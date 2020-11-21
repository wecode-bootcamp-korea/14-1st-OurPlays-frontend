import React, { Component } from 'react';
import '../ProductList.scss';

class ControlButtons extends Component {
  render() {
    return (
      <div className='ControlButtons'>
        <div className='control-buttons'>
          {CONTROLBUTTONS.map((controlButton) => {
            return (
              <div key={controlButton.id} className='button-box'>
                <button className='control-button'>
                  <span>{controlButton.category}</span>
                  <img src={controlButton.src} alt={controlButton.alt} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ControlButtons;

const CONTROLBUTTONS = [
  {
    id: 0,
    category: '날짜',
    src: '../images/youngjoonpark/control-bar.png',
    alt: 'control-date',
  },
  {
    id: 1,
    category: '인원',
    src: '../images/youngjoonpark/control-bar.png',
    alt: 'control-number',
  },
  {
    id: 2,
    category: '가격',
    src: '../images/youngjoonpark/control-bar.png',
    alt: 'control-price',
  },
];
