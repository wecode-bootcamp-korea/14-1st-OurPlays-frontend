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
                <div className='button-box'>
                  <button className='control-button'>
                    <span>날짜</span>
                    <img src='../images/youngjoonpark/control-bar.png' alt='control-bar' />
                  </button>
                </div>
                <div className='button-box'>
                  <button className='control-button'>
                    <span>인원</span>
                    <img src='../images/youngjoonpark/control-bar.png' alt='control-bar' />
                  </button>
                </div>
                <div className='button-box'>
                  <button className='control-button'>
                    <span>가격</span>
                    <img src='../images/youngjoonpark/control-bar.png' alt='control-bar' />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className='main'>
            <div className='room-lists'>
              <Link className='room-list-link' to=''>
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
                <div className='room-list-imgs'>
                  <img
                    className='room-list-img'
                    src='../images/youngjoonpark/옥상.jpg'
                    alt='room-img'
                  />
                  <img
                    className='bookmark-empty'
                    src='../images/youngjoonpark/bookmark-empty.png'
                    alt='북마크'
                  />
                  <img
                    className='bookmark-filled'
                    src='../images/youngjoonpark/bookmark-filled.png'
                    alt='북마크'
                  />
                </div>
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
          </section>
        </div>
      </div>
    );
  }
}

export default ProductList;
