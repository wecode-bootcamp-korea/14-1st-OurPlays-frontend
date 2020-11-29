/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MainList.scss";

class RoomCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  goToDetail = (place_id) => {
    this.props.history.push(`/place/detail/${place_id}`);
  };

  render() {
    const { MainLists } = this.props;
    console.log(this.props.MainLists);
    return (
      <>
        {MainLists &&
          MainLists.map((placeinfo) => {
            console.log(placeinfo);
            return (
              <div className="room-list">
                <div className="room-list-link">
                  <div className="RoomListImages">
                    <div className="room-list-imgs">
                      <img
                        onClick={() => this.goToDetail(placeinfo.place_id)}
                        className="room-list-img"
                        src={placeinfo.img_url}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="room-list-text"
                    onClick={() => this.goToDetail(placeinfo.place_id)}
                  >
                    <div
                      className="room-list-region"
                      onClick={() => this.goToDetail(placeinfo.place_id)}
                    >
                      {" "}
                      {placeinfo.category}/{placeinfo.region}{" "}
                    </div>{" "}
                    <div
                      className="room-list-title"
                      onClick={() => this.goToDetail(placeinfo.place_id)}
                    >
                      {" "}
                      {placeinfo.title}{" "}
                    </div>{" "}
                    <div className="room-list-price">
                      <span className="big-text">
                        {" "}
                        {placeinfo.price_per_hour.toLocaleString(2)}{" "}
                      </span>{" "}
                      <span className="small-text"> 원 / 시간 </span>{" "}
                    </div>{" "}
                    <div className="room-list-grade">
                      {" "}
                      <div class="stars-outer">
                        <div
                          class="stars-inner"
                          style={{ width: `${placeinfo.starpoint_avg * 20}%` }}
                        ></div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
      </>
    );
  }
}

export default withRouter(RoomCard);
