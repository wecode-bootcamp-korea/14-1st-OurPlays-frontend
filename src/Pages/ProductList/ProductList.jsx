import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className='ProductList'>
        <div className='product-list'>
          <section className='header'>
            <div className='title'>옥상</div>
            <div className='filter'>
              <div className='control-buttons'>
                <span className='control-button'>날짜</span>
                <span className='control-button'>인원</span>
                <span className='control-button'>가격</span>
              </div>
            </div>
          </section>
          <section className='main'>
            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목 </div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>Large rooftop with panorama city view!</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <img
                  className='room-list-img'
                  src='../images/youngjoonpark/옥상.jpg'
                  alt='room-img'
                />
                <div className='room-list-text'>
                  <div className='room-list-region'>카테고리/지역</div>
                  <div className='room-list-title'>글제목</div>
                  <div className='room-list-price'>
                    <span className='big-text'>56000</span>
                    <span className='small-text'>원/시간</span>
                  </div>
                  <div className='room-list-grade'>
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <img src='../images/youngjoonpark/star-icon.svg' alt='star-icon' />
                    <span>54</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductList;
