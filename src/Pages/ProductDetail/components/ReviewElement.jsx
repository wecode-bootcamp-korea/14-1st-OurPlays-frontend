import React, { Component } from "react";

class ReviewElement extends Component {
  state = {
    updatedRating: this.props.isHover,
  };
  render() {
    const {
      data: { user_name, id, comment, starpoint },
      handleDelete,
      posts,
    } = this.props;
    console.log(this.props.data);
    return (
      <div className="card-wrap">
        <div className="card-header">
          <div className="card-img">
            <img src="../images/donghakim/img1.jpeg" alt="user" />
          </div>{" "}
          <div className="card-user-info">
            <span className="name"> {user_name} </span>{" "}
            <span className="time"> November 2020 </span>{" "}
          </div>{" "}
          <i class="far fa-trash-alt delete-comment" onClick={handleDelete}></i>{" "}
        </div>{" "}
        <div className="card-content-wrap">
          <div class="stars-outer modal-star">
            <div class="stars-inner" style={{ width: `${starpoint * 4}%` }}>
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="card-content"> {comment} </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ReviewElement;
