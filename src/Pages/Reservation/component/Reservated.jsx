import React, { Component } from "react";
import { API, YA_API, YA401_API } from "../../../config";

class Reservated extends Component {
  state = { isStatus: false };

  handleCancel = (_id) => {
    fetch(`${API}/reservation`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: _id,
        status: 7,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          isStatus: res.message === "SUCCESS",
        });
      });
  };
  render() {
    const { isStatus } = this.state;
    const {
      begin_datetime,
      finish_datetime,
      total_price,
      id,
      host_name,
      img_url,
    } = this.props.info;

    return (
      <div className="content-wrap">
        <div className="pic">
          <img src={img_url} alt="장소" />
        </div>{" "}
        <div className="place-host-name"> {host_name} </div>{" "}
        <div className="place-date">
          {" "}
          {begin_datetime.slice(0, begin_datetime.indexOf("T"))} <br />
          <br /> ~ <br /> <br />{" "}
          {finish_datetime.slice(0, finish_datetime.indexOf("T"))}{" "}
        </div>{" "}
        <div className="place-price"> {total_price.toLocaleString(2)} </div>{" "}
        <div className={isStatus ? "place-status cancel" : "place-status"}>
          {" "}
          {isStatus ? "예약취소" : "예약신청"}{" "}
        </div>{" "}
        <div className="place-cancel-btn">
          <input
            type="button"
            value="취소하기"
            className="btn"
            onClick={() => {
              this.handleCancel(id);
            }}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Reservated;
