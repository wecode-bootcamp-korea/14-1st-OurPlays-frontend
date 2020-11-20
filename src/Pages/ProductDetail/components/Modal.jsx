import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  state = {
    comment: "",
  };
  handleChange = (e) => {
    console.log(this.state.comment);
    this.setState({ comment: e.target.value });
  };
  render() {
    const { handleSubmit, showModal } = this.props;
    return (
      <>
        {this.props.isShowModal ? (
          <div className="modal-container">
            <div className="modal-review-form">
              <h2 className="modal-review-title"> 후기를 작성해주세요! </h2>{" "}
              <i class="far fa-times-circle" onClick={this.props.showModal}></i>{" "}
              <div class="stars-outer modal-star">
                <div class="stars-inner modal-star-inner"> </div>{" "}
              </div>{" "}
              <span class="number-rating modal-star-number"> </span>{" "}
              <div className="form-wrap">
                <form
                  action="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(this.state.comment);
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
