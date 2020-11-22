import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RoomListGrade from './RoomListGrade';
import Bookmark from './Bookmark';
import '../ProductList.scss';

class RoomList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  goToDetail = () => {
    this.props.history.push(`/ProductList/ProductDetail/${this.props.id}`);
  };

  render() {
    return (
      <>
        {ROOMLIST.map((roomList) => {
          return (
            <div className='room-list'>
              <div className='room-list-link'>
                <div className='RoomListImages'>
                  <div className='room-list-imgs'>
                    <img onClick={this.goToDetail} className='room-list-img' src={roomList.src} />
                    <Bookmark />
                  </div>
                </div>
                <div className='room-list-text' onClick={this.goToDetail}>
                  <div className='room-list-region' onClick={this.goToDetail}>
                    {this.props.category}/{roomList.region}
                  </div>
                  <div className='room-list-title' onClick={this.goToDetail}>
                    {roomList.title}
                  </div>
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
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default withRouter(RoomList);

const ROOMLIST = [
  {
    id: 0,
    linkTo: '',
    region: '서울',
    title: '중구 빈티지 홈카페 오피스텔',
    price: '23000',
    countReview: '7',
    src: 'https://i.pinimg.com/564x/6a/67/e1/6a67e1bd74bc5bd828b4d007daf558cb.jpg',
  },
  {
    id: 1,
    linkTo: '',
    region: '서울',
    title: '생활감 있는 반지하 원룸 / 서울 소재 [기생충] 학생 및 장기 대관 환영',
    price: '28000',
    countReview: '27',
    src: 'https://i.pinimg.com/236x/9a/44/04/9a44049bd9e3ad35f0919ad66a0e7d3a.jpg',
  },
  {
    id: 2,
    linkTo: '',
    region: '서울',
    title: '햇살&뷰맛집! 원룸형 공용 아지트 in 잠실',
    price: '35000',
    countReview: '27',
    src: 'https://i.pinimg.com/236x/85/b1/6d/85b16d1a94429594d4f83f3dd45add79.jpg',
  },
  {
    id: 3,
    linkTo: '',
    region: '서울',
    title: '강남구 원목과 패브릭으로 아늑하게 꾸민 원룸',
    price: '42000',
    countReview: '27',
    src: 'https://i.pinimg.com/236x/cf/c7/eb/cfc7eb3005c1a0448a26a43806117eba.jpg',
  },
  {
    id: 4,
    linkTo: '',
    region: '서울',
    title: '남산이 보이는 옥탑방',
    price: '54000',
    countReview: '27',
    src: 'https://i.pinimg.com/236x/60/c6/66/60c666abdf592be285da86d5ff7c225a.jpg',
  },
  {
    id: 5,
    linkTo: '',
    region: '서울',
    title: 'FVA STUDIO',
    price: '13000',
    countReview: '27',
    src: 'https://i.pinimg.com/236x/ee/5e/80/ee5e80f2ba3b24c0c890af28fc869814.jpg',
  },
];
