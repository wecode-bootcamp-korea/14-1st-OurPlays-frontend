import React, { Component } from "react";

class ReviewElement extends Component {
  state = {
    updatedRating: this.props.isHover,
  };
  render() {
    const {
      data: { name, id, comment, date },
      handleDelete,
    } = this.props;
    return (
      <div className="card-wrap">
        <div className="card-header">
          <div className="card-img">
            <img src="../images/donghakim/img1.jpeg" alt="user" />
          </div>{" "}
          <div className="card-user-info">
            <span className="name"> {name} </span>{" "}
            <span className="time"> November 2020 </span>{" "}
          </div>{" "}
          <i
            class="far fa-trash-alt delete-comment"
            onClick={this.props.handleDelete}
          ></i>{" "}
        </div>{" "}
        <div className="card-content-wrap">
          <div class="stars-outer modal-star">
            <div
              class="stars-inner"
              style={{ width: `${this.state.updatedRating * 4}%` }}
            >
              {" "}
            </div>
          </div>{" "}
          <div className="card-content"> {comment} </div>
        </div>{" "}
      </div>
    );
  }
}

export default ReviewElement;
