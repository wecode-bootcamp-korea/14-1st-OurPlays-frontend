import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import ProductDetail from '../../ProductDetail/ProductDetail';
import RoomList from './RoomList';
import '../ProductList.scss';

class ProductLists extends Component {
  state = {
    productlists: [],
  };

  // componentDidMount() {
  //   fetch();
  // }

  render() {
    return (
      <div className='ProductLists'>
        <div className='product-list'>
          {PRODUCTLISTS.map((productList) => {
            return (
              <div key={productList.id}>
                <section className='header'>
                  <div className='title'>{productList.category}</div>
                  <div className='filter'>
                    <ControlButtons />
                  </div>
                </section>
                <section className='room-lists'>
                  <RoomList category={productList.category} />
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductLists;

const PRODUCTLISTS = [
  {
    id: 0,
    category: '원룸',
  },
];
