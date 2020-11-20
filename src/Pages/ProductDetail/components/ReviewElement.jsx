import React, { Component } from "react";

class ReviewElement extends Component {
  render() {
    const { name, id, comment, date } = this.props.data;
    return (
      <div className="card-wrap">
        <div className="card-header">
          <div className="card-img">
            <img src="../images/donghakim/img1.jpeg" alt="" />
          </div>{" "}
          <div className="card-user-info">
            <span className="name"> {name} </span>{" "}
            <span className="time"> November 2020 </span>{" "}
          </div>{" "}
          <i
            class="far fa-trash-alt delete-comment"
            onClick={this.props.handleDelete}
          ></i>
        </div>{" "}
        <div className="card-content">{comment} </div>{" "}
      </div>
    );
  }
}

export default ReviewElement;
