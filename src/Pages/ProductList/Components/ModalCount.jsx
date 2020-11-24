import React, { Component } from 'react';

class ModalCount extends Component {
  constructor() {
    super();
    this.state = {
      count: '',
    };
  }

  handleMinPrice = (e) => {
    const { value } = e.target;
    this.setState({ minPrice: value });
  };

  handleMaxPrice = (e) => {
    const { value } = e.target;
    this.setState({ maxPrice: value });
  };

  filterLists = () => {
    const { minPrice, maxPrice } = this.state;
    const { PLACEINFO } = this.props;
    const filteredPlaceInfo = PLACEINFO.filter((placeinfo) => {
      return placeinfo.price <= maxPrice && placeinfo.price >= minPrice;
    });
    this.props.filterLists(filteredPlaceInfo);
  };

  render() {
    return (
      <div className={ModalCount}>
        <div></div>
      </div>
    );
  }
}

export default ModalCount;
