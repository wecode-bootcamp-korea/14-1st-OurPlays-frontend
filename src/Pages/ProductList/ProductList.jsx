import React, { Component } from 'react';
import ProductLists from './Components/ProductLists';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    placeinfo: [],
  };

  componentDidMount() {
    fetch('/Data/PlaceData.json')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  render() {
    return (
      <div className='ProductList'>
        <ProductLists />
      </div>
    );
  }
}

export default ProductList;
