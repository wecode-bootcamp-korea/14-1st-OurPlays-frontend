import React, { Component } from "react";
import "./Alert.scss";

class Alert extends Component {
  render() {
    return (
      <div
        className={
          this.props.condition
            ? "alert alert-danger hide"
            : "alert alert-danger show"
        }
      >
        <i className="fas fa-exclamation-circle"> 비밀 번호를 확인해주세요. </i>{" "}
      </div>
    );
  }
}

export default Alert;
