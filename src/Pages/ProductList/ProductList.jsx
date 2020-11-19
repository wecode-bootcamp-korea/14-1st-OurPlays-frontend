import React, { Component } from 'react';
import ProductLists from './Components/ProductLists';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div className='ProductList'>
        <ProductLists />
      </div>
    );
  }
}

export default ProductList;
