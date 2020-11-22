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
      .then((res) => this.setState({ placeinfo: res }));
  }
  render() {
    const { placeinfo } = this.state;
    return (
      <div className='ProductList'>
        <ProductLists placeinfo={placeinfo} />
      </div>
    );
  }
}

export default ProductList;
