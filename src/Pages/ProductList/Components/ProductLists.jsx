import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import ProductDetail from '../../ProductDetail/ProductDetail';
import Modal from './Modal';
import RoomList from './RoomList';
import '../ProductList.scss';

class ProductLists extends Component {
  state = {
    productlists: [],
    isModal: '',
  };

  openModal = (data) => {
    this.setState({ isModal: data });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { PLACEINFO } = this.props;
    console.log('ProductLists', PLACEINFO[0]);
    return (
      <div className='ProductLists'>
        <div className={this.state.isModal ? '' : 'display-none'}>
          <Modal closeModal={this.closeModal} />
        </div>
        <div className='product-list'>
          <section className='header'>
            <div className='title'>{PLACEINFO.category}</div>
            <div className='filter'>
              <ControlButtons isModal={this.openModal} />
            </div>
          </section>
          <section className='room-lists'>
            <RoomList PLACEINFO={PLACEINFO} category={PLACEINFO.category} />
          </section>
        </div>
      </div>
    );
  }
}

export default ProductLists;
