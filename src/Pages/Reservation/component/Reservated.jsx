import React, { Component } from "react";
import { API } from "../../../config";

class Reservated extends Component {
  state = { isStatus: false };
  handleCancel = (_id) => {
    console.log(_id);
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
        console.log(res);
        if (res.message === "SUCCESS") {
          this.setState({
            isStatus: true,
          });
        }
      });
  };
  render() {
    console.log(this.state.isStatus);
    return (
      <div className="content-wrap">
        <div className="pic">
          <img src={this.props.info.img_url} alt="" />
        </div>
        <div className="place-host-name"> {this.props.info.host_name} </div>
        <div className="place-date">
          {this.props.info.begin_datetime.slice(
            0,
            this.props.info.begin_datetime.indexOf("T")
          )}
          <br />
          <br /> ~<br /> <br />
          {this.props.info.finish_datetime.slice(
            0,
            this.props.info.finish_datetime.indexOf("T")
          )}
        </div>
        <div className="place-price">
          {this.props.info.total_price.toLocaleString(2)}
        </div>
        <div
          className={
            this.state.isStatus ? "place-status cancel" : "place-status"
          }
        >
          {this.state.isStatus ? "예약취소" : "예약신청"}
        </div>
        <div className="place-cancel-btn">
          <input
            type="button"
            value="취소하기"
            className="btn"
            onClick={() => {
              this.handleCancel(this.props.info.id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Reservated;
