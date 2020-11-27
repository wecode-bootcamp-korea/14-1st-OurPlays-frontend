/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Slider extends Component {
  goToDetail = () => {
    this.props.history.push(`/place/detail/${this.props.info.place_id}`);
  };

  render() {
    const { info } = this.props;
    console.log(info, info);
    // const averageRatingArr = info.ratings.map((el) => {
    //   return el.starpoint;
    // });
    // const average = averageRatingArr.reduce((pre, cur) => {
    //   return pre + cur / averageRatingArr.length;
    // }, 0);

    return (
      <li
        className="slider-content-list-wrap"
        id={`list-${info.id + 1}`}
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
                  {info.price_per_hour.toLocaleString(2)}
                  /시간
                </div>
                <div className="slider-content-inner-rateAndMark">
                  <div className="slider-content-inner-rate">
                    <div className="stars-outer">
                      <div
                        className="stars-inner"
                        style={{
                          width: `${info.starpoint_avg * 18}%`,
                        }}
                      ></div>
                    </div>
                    <div className="number-rating">
                      {info.ratings === 0 ? "평가없음" : info.ratings}
                    </div>
                  </div>
                  <div className="slider-content-inner-mark">
                    <i className="far fa-bookmark"> </i>
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

export default withRouter(Slider);
