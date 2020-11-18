import React, { Component } from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className='Category'>
        <div className='category-items'>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/원룸.png' alt='원룸-img' />
            <div className='category-name'>원룸</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/사무실.png' alt='사무실-ing' />
            <div className='category-name'>사무실</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/빌라.png' alt='빌라-img' />
            <div className='category-name'>빌라</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/아파트.png' alt='아파트-img' />
            <div className='category-name'>아파트</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/옥상.png' alt='옥상-img' />
            <div className='category-name'>옥상</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/주택.png' alt='주택-img' />
            <div className='category-name'>주택</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/스튜디오.png' alt='스튜디오-img' />
            <div className='category-name'>스튜디오</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/카페식당.png' alt='카페식당-img' />
            <div className='category-name'>카페식당</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/팬션.png' alt='팬션-img' />
            <div className='category-name'>펜션</div>
          </Link>
          <Link className='category-item' to=''>
            <img src='../images/youngjoonpark/category-img/그 외 장소.png' alt='그 외 장소-img' />
            <div className='category-name'>그 외 장소</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Category;
