import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import ProductDetail from '../../ProductDetail/ProductDetail';
import Modal from './Modal';
import RoomList from './RoomList';
import '../ProductList.scss';

class ProductLists extends Component {
  state = {
    productlists: [],
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  // closeModal = () => {
  //   this.setState({ isModal: false });
  // };

  render() {
    const { PLACEINFO } = this.props;

    return (
      <div className='ProductLists'>
        <div className={this.state.isModal ? '' : 'display-none'}>
          <Modal openModal={this.openModal} />
        </div>
        <div className='product-list'>
          <section className='header'>
            <div className='title'>{PLACEINFO.id}</div>
            <div className='filter'>
              <ControlButtons openModal={this.openModal} />
            </div>
          </section>
          <section className='room-lists'>
            <RoomList PLACEINFO={PLACEINFO} category='' />
          </section>
        </div>
      </div>
    );
  }
}

export default ProductLists;
