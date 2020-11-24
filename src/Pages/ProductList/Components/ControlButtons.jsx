import React, { Component } from 'react';
import '../ProductList.scss';

class ControlButtons extends Component {
  constructor() {
    super();
    this.state = {
      isModal: false,
    };
  }

  // openModal = (e) => {
  //   e.preventDefault();
  //   // if (this.state.isModal === true) {
  //   //   this.setState({ isModal: false });
  //   // } else {
  //   //   this.setState({ isModal: true });
  //   // }

  //   this.setState({
  //     isModal: !this.state.isModal,
  //   });
  //   // this.props.isModal({ isModal: this.state.isModal });
  // };
  render() {
    console.log(this.props);
    return (
      <div className='ControlButtons'>
        <div className='control-buttons'>
          <div className='control-button'>
            <button className='button-date'>
              <span>날짜</span>
              <img src='../images/youngjoonpark/control-bar.png' alt='날짜' />
            </button>
          </div>
          <div className='control-button'>
            <button className='button-count'>
              <span>인원</span>
              <img src='../images/youngjoonpark/control-bar.png' alt='인원' />
            </button>
          </div>
          <div
            className='control-button'
            onClick={() => {
              this.props.openModal();
            }}
          >
            <button className='button-price'>
              <span>가격</span>
              <img src='../images/youngjoonpark/control-bar.png' alt='가격' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlButtons;
