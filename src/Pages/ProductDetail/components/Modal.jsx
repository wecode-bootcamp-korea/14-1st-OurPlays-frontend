import React, { Component } from "react";
import Star from "./Star";
import "./Modal.scss";

class Modal extends Component {
  state = {
    comment: "",
    rating: this.props.isHover,
  };
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const {
      handleSubmit,
      showModal,
      rating,
      isHover,
      handleRatingHover,
      handleRating,
    } = this.props;
    const { comment, updatedRating } = this.state;
    console.log(isHover);
    return (
      <>
        {this.props.isShowModal ? (
          <div className="modal-container">
            <div className="modal-review-form">
              <h2 className="modal-review-title"> 후기를 작성해주세요! </h2>{" "}
              <i class="far fa-times-circle" onClick={showModal}></i>
              <Star
                handleRating={handleRating}
                handleRatingHover={handleRatingHover}
                rating={rating}
                isHover={isHover}
              />
              <span class="number-rating modal-star-number"> </span>{" "}
              <div className="form-wrap">
                <form
                  action="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(comment, rating);
                    this.setState({
                      comment: "",
                    });
                    showModal();
                  }}
                >
                  <input
                    type="text"
                    className="user-input"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                  />{" "}
                  <input
                    type="button"
                    value="제출"
                    className="user-submit-btn"
                  />
                </form>{" "}
              </div>{" "}
            </div>
          </div>
        ) : null}{" "}
      </>
    );
  }
}

export default Modal;
