import React, { Component } from 'react';
import ControlButtons from './ControlButtons';
import RoomLists from './RoomLists';
import '../ProductList.scss';

const PRODUCTLISTS = [
  {
    id: 0,
    category: '원룸',
  },
];

class ProductLists extends Component {
  render() {
    return (
      <div className='product-list'>
        {PRODUCTLISTS.map((productList) => {
          return (
            <>
              <section className='header'>
                <div className='title'>{productList.category}</div>
                <div className='filter'>
                  <ControlButtons />
                </div>
              </section>
              <section className='main'>
                <RoomLists category={productList.category} />
              </section>
            </>
          );
        })}
      </div>
    );
  }
}

export default ProductLists;
