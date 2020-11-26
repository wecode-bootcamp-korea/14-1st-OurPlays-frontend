import React, { Component } from "react";
import Reservated from "./component/Reservated";
import { API } from "../..//config";
import "./Reservation.scss";

class Reservation extends Component {
  state = {
    reservation: "",
  };
  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  //   if (prevProps.id !== this.props.id) {
  //     console.log("mark cdm");
  //     fetch(`${API}/reservation`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         if (res.message === "SUCCESS") {
  //           this.setState({
  //             reservation: res.information,
  //           });
  //         }
  //       });
  //   }
  // }

  componentDidMount() {
    console.log("mark cdm");
    fetch(`${API}/reservation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          this.setState({
            reservation: res.information,
          });
        }
      });
  }

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
            status: "예약취소",
          });
        }
      });
  };
  render() {
    console.log(this.state.reservation);
    return (
      <div className="Reservation">
        <div className="container">
          <div className="top">
            <h2>예약관리</h2>
            <div className="item-title-wrap">
              <div className="pic">
                공간 이미지
                <img src="" alt="" />
              </div>
              <div className="title">호스트 이름</div>
              <div className="date">기간</div>
              <div className="price">최종 금액</div>
              <div className="title">예약 상태</div>
              <div className="btn">취소</div>
            </div>
          </div>
          <div className="content">
            <div className="content-header">
              {this.state.reservation &&
                this.state.reservation.map((ele) => {
                  return (
                    <Reservated
                      info={ele}
                      handleCancel={this.handleCancel}
                      isStatus={this.state.status}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
