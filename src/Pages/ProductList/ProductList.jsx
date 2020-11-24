import React, { Component } from 'react';
import ProductLists from './Components/ProductLists';
import './ProductList.scss';

class ProductList extends Component {
  state = {
    PLACEINFO: [],
  };

  componentDidMount() {
    fetch('/Data/PlaceData.json')
      .then((res) => res.json())
      // .then((res) => {
      //   const datas = res.information;
      //   console.log(datas);
      //   const current = datas.find((el) => el.id == 0);
      //   console.log(current);
      //   this.setState({ PLACEINFO: current });
      // });
      .then((res) => this.setState({ PLACEINFO: res.information }));
  }

  // componentDidMount() {
  //   fetch('http://10.58.3.74:8000/ProductList/ProductDetail')
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ PLACEINFO: res.information }));
  // }

  render() {
    const { PLACEINFO } = this.state;
    console.log(PLACEINFO);
    return (
      <div className='ProductList'>
        <ProductLists PLACEINFO={PLACEINFO} />
      </div>
    );
  }
}

export default ProductList;
