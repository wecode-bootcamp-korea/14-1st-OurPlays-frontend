import React, { Component } from "react";
import "./Alert.scss";

class Alert extends Component {
  render() {
    const { message, condition, color } = this.props;
    return (
      <div
        className={
          condition ? `alert alert-${color} hide` : `alert alert-${color} show`
        }
      >
        <i className="fas fa-exclamation-circle"> {message} </i>{" "}
      </div>
    );
  }
}

export default Alert;
