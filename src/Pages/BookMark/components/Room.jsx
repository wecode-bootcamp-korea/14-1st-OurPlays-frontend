/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Room.scss";

const targetClass = "far fa-bookmark";

class Room extends Component {
  constructor() {
    super();
    this.target = React.createRef();
    this.state = {};
  }

  goToDetail = (e) => {
    if (e.target.nodeName === this.target.current.nodeName) {
      this.addBookMark();
      return;
    }
    this.props.history.push(`/ProductList/ProductDetail/${this.props.info.id}`);
  };

  render() {
    const { info, idx } = this.props;
    const averageRatingArr =
      this.props.info &&
      this.props.info.ratings.map((el) => {
        return el.starpoint;
      });
    return (
      <li
        key={idx}
        className="room-content-list-wrap"
        onClick={this.goToDetail}
      >
        <div className="slider-content-list">
          <img src={info.img_url} />
          <div className="slider-content">
            <div className="slider-content-inner">
              <div className="slider-content-inner-top">
                <h3 className="slider-content-inner-loc">
                  {info.category}/{info.region}
                </h3>
                <div className="slider-content-inner-title"> {info.title} </div>
              </div>
              <div className="slider-content-inner-bottom">
                <div className="slider-content-inner-price">
                  {info.price.toLocaleString(2)}
                  /시간
                </div>
                <div className="slider-content-inner-rateAndMark">
                  <div className="slider-content-inner-rate">
                    <div className="stars-outer">
                      <div
                        className="stars-inner"
                        style={{
                          width: `${
                            averageRatingArr.reduce((pre, cur) => {
                              return pre + cur / averageRatingArr.length;
                            }, 0) * 20
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="number-rating">
                      {averageRatingArr.length}
                    </span>
                  </div>
                  <div className="slider-content-inner-mark">
                    <i
                      className="far fa-bookmark room-mark"
                      ref={this.target}
                      onClick={this.addBookMark}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Room);
