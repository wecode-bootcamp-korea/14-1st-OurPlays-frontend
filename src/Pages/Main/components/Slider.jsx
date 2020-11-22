import React, { Component } from "react";

class Slider extends Component {
  render() {
    const { info } = this.props;
    return (
      <li className="slider-content-list-wrap" id={`list-${info.id + 1}`}>
        <div className="slider-content-list">
          <img src={info.img} />{" "}
          <div className="slider-content">
            <div className="slider-content-inner">
              <div className="slider-content-inner-top">
                <h3 className="slider-content-inner-loc">
                  {" "}
                  {info.type}/{info.location}{" "}
                </h3>{" "}
                <div className="slider-content-inner-title"> {info.desc} </div>{" "}
              </div>{" "}
              <div className="slider-content-inner-bottom">
                <div className="slider-content-inner-price">
                  {" "}
                  {info.price.toLocaleString()}
                  /시간{" "}
                </div>{" "}
                <div className="slider-content-inner-rateAndMark">
                  <div className="slider-content-inner-rate">
                    <div className="stars-outer">
                      <div className="stars-inner"> </div>{" "}
                    </div>{" "}
                    <span className="number-rating"> </span>{" "}
                  </div>{" "}
                  <div className="slider-content-inner-mark">
                    <i className="far fa-bookmark"> </i>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </li>
    );
  }
}

export default Slider;
