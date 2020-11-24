import React, { Component } from 'react';
import './ModalPrice.scss';

class ModalPrice extends Component {
  constructor() {
    super();
    this.state = {
      minPrice: '',
      maxPrice: '',
    };
  }

  handleMinPrice = (e) => {
    const { value } = e.target;
    this.setState({ minPrice: value });
  };

  handleMaxPrice = (e) => {
    const { value } = e.target;
    this.setState({ maxPrice: value });
  };

  filterLists = () => {
    const { minPrice, maxPrice } = this.state;
    const { PLACEINFO } = this.props;
    const filteredPlaceInfo = PLACEINFO.filter((placeinfo) => {
      return placeinfo.price <= maxPrice && placeinfo.price >= minPrice;
    });
    this.props.filterLists(filteredPlaceInfo);
  };

  render() {
    const { closeModal } = this.props;
    const { minPrice, maxPrice } = this.state;
    const { PLACEINFO } = this.props;
    const filteredPlaceInfo = PLACEINFO.filter((placeinfo) => {
      return placeinfo.price >= 90000;
    });

    console.log(filteredPlaceInfo);

    console.log(minPrice, maxPrice);
    return (
      <div onClick={closeModal} className='ModalPrice'>
        <div className='modal'>
          <h3>시간당 금액</h3>
        </div>
        <div className='text-and-input'>
          <div className='text-info'>원하시는 시간당 금액을 설정해 주세요.</div>
          <div className='input-boxes'>
            <input
              onChange={this.handleMinPrice}
              type='text'
              placeholder='최소금액'
              className='input-box-min'
            />
            <div className='dash'>-</div>
            <input
              onChange={this.handleMaxPrice}
              type='text'
              placeholder='최대금액'
              className='input-box-max'
            />
          </div>
        </div>
        <div className='delete-confirm'>
          <button className='delete'>삭제</button>
          <button onClick={this.filterLists} className='confirm'>
            확인
          </button>
        </div>
      </div>
    );
  }
}

export default ModalPrice;
