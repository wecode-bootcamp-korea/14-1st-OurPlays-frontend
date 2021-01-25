/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./ModalPrice.scss";

class ModalPrice extends Component {
  constructor() {
    super();
    this.state = {
      minPrice: "",
      maxPrice: "",
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
      return (
        placeinfo.price_per_hour <= maxPrice &&
        placeinfo.price_per_hour >= minPrice
      );
    });
    this.props.filterLists(filteredPlaceInfo);
  };

  render() {
    const { minPrice, maxPrice } = this.state;
    const { PLACEINFO } = this.props;
    const filteredPlaceInfo = PLACEINFO.filter((placeinfo) => {
      return placeinfo.price_per_hour >= 90000;
    });
    const activateMin = minPrice.length > 0;
    const activateMax = maxPrice.length > 0;

    return (
      <div className="ModalPrice">
        <div className="modal">
          <h3> 시간당 금액 </h3>{" "}
        </div>{" "}
        <div className="text-and-input">
          <div className="text-info">
            {" "}
            원하시는 시간당 금액을 설정해 주세요.{" "}
          </div>{" "}
          <div className="input-boxes">
            <div className="input-box-min">
              <input
                onChange={this.handleMinPrice}
                type="text"
                placeholder="최소금액"
              />
              <span className={activateMin ? "activate" : "deactivate"}>
                원{" "}
              </span>{" "}
            </div>{" "}
            <div className="dash"> - </div>{" "}
            <div className="input-box-max">
              <input
                onChange={this.handleMaxPrice}
                type="text"
                placeholder="최대금액"
              />
              <span className={activateMax ? "activate" : "deactivate"}>
                원{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="delete-confirm">
          <button className="delete"> 삭제 </button>{" "}
          <button onClick={this.filterLists} className="confirm">
            확인{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ModalPrice;
