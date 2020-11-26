import React, { Component } from "react";
import "../ProductList.scss";

class ControlButtons extends Component {
  constructor() {
    super();
    this.state = {
      isModal: false,
    };
  }
  render() {
    return (
      <div className="ControlButtons">
        <div className="control-buttons">
          <div className="control-button">
            <button className="button-date">
              <span>날짜</span>
              <img src="../images/youngjoonpark/control-bar.png" alt="날짜" />
            </button>
          </div>
          <div className="control-button">
            <button
              className="button-count"
              onClick={() => {
                this.props.openModalCount();
              }}
            >
              <span>인원</span>
              <img src="../images/youngjoonpark/control-bar.png" alt="인원" />
            </button>
          </div>
          <div className="control-button">
            <button
              className="button-price"
              onClick={() => {
                this.props.openModalPrice();
              }}
            >
              <span>가격</span>
              <img src="../images/youngjoonpark/control-bar.png" alt="가격" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlButtons;
