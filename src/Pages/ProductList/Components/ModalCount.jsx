import React, { Component } from 'react';
import './ModalCount.scss';

const countNumber = [{}]

class ModalCount extends Component {
  constructor() {
    super();
    this.state = {
      count: '',
    };
  }


  filterLists = () => {
    const { PLACEINFO } = this.props;
    // const filteredPlaceInfo = PLACEINFO.filter((placeinfo) => {
    //   return placeinfo.price <= maxPrice && placeinfo.price >= minPrice;
    // });
    // this.props.filterLists(filteredPlaceInfo);
  };

  render() {
    return (
      <div className='ModalCount'>
        <div className='modal'>
          <h3>촬영 인원 선택</h3>
        </div>
        <div className='text-and-input'>
          <div className='text-info'>촬영 인원을 설정해 주세요.</div>
          <div className='text-info-bottom'>설정 하신 인원을 수용한 촬영 장소가 검색됩니다.</div>
          <select className='select-options' placeholder=''>
            <option value='count'>인원을 선택해주세요</option>

            <option value=''>1</option>
            <option value=''>2</option>
            <option value=''>3</option>
          </select>
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

export default ModalCount;
