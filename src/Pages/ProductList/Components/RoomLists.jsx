import React, { Component } from 'react';
import RoomListImages from './RoomListImages';
import RoomListGrade from './RoomListGrade';
import { Link } from 'react-router-dom';
import '../ProductList.scss';

const ROOMLISTS = [
  {
    id: 0,
    linkTo: '',
    region: '서울',
    title: '안녕하세요',
    price: '57000',
    countReview: '27',
  },
  {
    id: 1,
    linkTo: '',
    region: '서울',
    title: '분위기있는 집',
    price: '57000',
    countReview: '27',
  },
  {
    id: 2,
    linkTo: '',
    region: '서울',
    title: '분위기있는 집',
    price: '57000',
    countReview: '27',
  },
  {
    id: 3,
    linkTo: '',
    region: '서울',
    title: '분위기있는 집',
    price: '57000',
    countReview: '27',
  },
  {
    id: 4,
    linkTo: '',
    region: '서울',
    title: '분위기있는 집',
    price: '57000',
    countReview: '27',
  },
  {
    id: 5,
    linkTo: '',
    region: '서울',
    title: '분위기있는 집',
    price: '57000',
    countReview: '27',
  },
];
class RoomLists extends Component {
  render() {
    return (
      <>
        {ROOMLISTS.map((roomList) => {
          return (
            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <RoomListImages />
                <div className='room-list-text'>
                  <div className='room-list-region'>
                    {this.props.category}/{roomList.region}
                  </div>
                  <div className='room-list-title'>{roomList.title}</div>
                  <div className='room-list-price'>
                    <span className='big-text'>{roomList.price}</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <RoomListGrade />
                    <div className='review-number'>
                      <span>{roomList.countReview}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}

export default RoomLists;
