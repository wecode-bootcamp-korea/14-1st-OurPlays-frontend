import React, { Component } from "react";
import Star from "../../ProductDetail/components/Star";

class RoomListGrade extends Component {
  render() {
    return (
      <div className="RoomLIstGrade">
        <div class="stars-outer">
          <div
            class="stars-inner"
            style={{ width: `${this.props.placeinfo.starpoint_avg * 20}%` }}
          ></div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default RoomListGrade;

const ROOMLISTGRADE = [
  {
    id: 0,
    src: "../images/youngjoonpark/star-icon.svg",
    alt: "star-icon",
  },
  {
    id: 1,
    src: "../images/youngjoonpark/star-icon.svg",
    alt: "star-icon",
  },
  {
    id: 2,
    src: "../images/youngjoonpark/star-icon.svg",
    alt: "star-icon",
  },
  {
    id: 3,
    src: "../images/youngjoonpark/star-icon.svg",
    alt: "star-icon",
  },
  {
    id: 4,
    src: "../images/youngjoonpark/star-icon.svg",
    alt: "star-icon",
  },
];
