import React, { Component } from 'react';
import '../ProductList.scss';

const ROOMLISTIMAGES = [
  {
    id: 0,
    src: '../images/youngjoonpark/옥상.jpg',
    alt: 'room-img',
    className: 'room-list-img',
  },
  {
    id: 1,
    src: '../images/youngjoonpark/bookmark-empty.png',
    alt: '북마크',
    className: 'bookmark-empty',
  },
  {
    id: 2,
    src: '../images/youngjoonpark/bookmark-filled.png',
    alt: '북마크',
    className: 'bookmark-filled',
  },
];

class RoomListImages extends Component {
  render() {
    return (
      <div className='RoomListImages'>
        <div className='room-list-imgs'>
          {ROOMLISTIMAGES.map((roomListImage) => {
            return (
              <img
                key={roomListImage.id}
                className={roomListImage.className}
                src={roomListImage.src}
                alt={roomListImage.alt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default RoomListImages;
