import React from "react";

export default function Modal() {
  return (
    <>
      <div className="modal-review-form">
        <h2 className="modal-review-title"> 후기를 작성해주세요! </h2>{" "}
        <i class="far fa-times-circle"> </i>{" "}
        <div class="stars-outer modal-star">
          <div class="stars-inner modal-star-inner"> </div>{" "}
        </div>{" "}
        <span class="number-rating modal-star-number"> </span>{" "}
        <div className="form-wrap">
          <form action="post">
            <input type="text" className="user-input" />
            <input type="button" value="제출" className="user-submit-btn" />
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
