import React, { Component } from "react";
import ReviewElement from "./ReviewElement";

class DetailSlider extends Component {
  render() {
    const { comments, handleDelete } = this.props;
    return (
      <div className="product-detail-review-contents">
        <div className="product-detail-review-content">
          {comments.map((comment) => {
            return (
              <ReviewElement
                data={comment}
                handleDelete={() => {
                  handleDelete(comment.id);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default DetailSlider;
