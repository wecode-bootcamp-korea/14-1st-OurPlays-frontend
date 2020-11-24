import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  render() {
    const { closeModal } = this.props;
    console.log(this.props);
    return (
      <div onClick={closeModal} className='Modal'>
        <div className='modal'>
          <h3>시간당 금액</h3>
        </div>
        <div className='text-and-input'>
          <div className='text-info'>원하시는 시간당 금액을 설정해 주세요.</div>
          <div className='input-boxes'>
            <input type='text' placeholder='최소금액' className='input-box' />
            <div className='dash'>-</div>
            <input type='text' placeholder='최소금액' className='input-box' />
          </div>
        </div>
        <div className='delete-confirm'>
          <button className='delete'>삭제</button>
          <button className='confirm'>확인</button>
        </div>
      </div>
    );
  }
}

export default Modal;
