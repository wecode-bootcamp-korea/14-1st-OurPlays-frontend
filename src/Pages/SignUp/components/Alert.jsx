import React, { Component } from "react";
import "./Alert.scss";

class Alert extends Component {
  render() {
    const { message, condition, color } = this.props;
    console.log(this.props);
    return (
      <div
        className={
          condition ? `alert alert-${color} show` : `alert alert-${color} hide`
        }
      >
        <i className="fas fa-exclamation-circle"> {message} </i>
      </div>
    );
  }
}

export default Alert;
