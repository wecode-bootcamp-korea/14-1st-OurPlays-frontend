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
      //   const current = datas.find((el) => el.id == this.props.match.params.id);
      //   this.setState({ PLACEINFO: current });
      // });
      .then((res) => this.setState({ PLACEINFO: res.information }));
  }

  render() {
    const { PLACEINFO } = this.state;
    return (
      <div className='ProductList'>
        <ProductLists PLACEINFO={PLACEINFO} />
      </div>
    );
  }
}

export default ProductList;
