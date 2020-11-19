import React, { Component } from 'react';

const ROOMLISTGRADE = [
  {
    id: 0,
    src: '../images/youngjoonpark/star-icon.svg',
    alt: 'star-icon',
  },
  {
    id: 1,
    src: '../images/youngjoonpark/star-icon.svg',
    alt: 'star-icon',
  },
  {
    id: 2,
    src: '../images/youngjoonpark/star-icon.svg',
    alt: 'star-icon',
  },
  {
    id: 3,
    src: '../images/youngjoonpark/star-icon.svg',
    alt: 'star-icon',
  },
  {
    id: 4,
    src: '../images/youngjoonpark/star-icon.svg',
    alt: 'star-icon',
  },
];

class RoomListGrade extends Component {
  render() {
    return (
      <div className='room-list-grade'>
        {ROOMLISTGRADE.map((roomListGrade) => {
          return (
            <div key={roomListGrade.id}>
              <img src={roomListGrade.src} alt={roomListGrade.alt} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default RoomListGrade;
