/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ReviewElement from "./ReviewElement";
import Pagination from "./Pagination";
import "./ReviewList.scss";
import { API, YA401_API } from "../../../config";
const LIMIT = 4;

class DetailSlider extends Component {
  state = {
    posts: [],
    reviewLists: [],
    currentPage: 1,
    postsPerPage: 4,
    place_id: "",
    ratings: "",
    offset: 0,
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.place_id !== this.props.place_id ||
      (prevProps.isShowModal === true && this.props.isShowModal === false) ||
      prevProps.ratings.length !== this.props.ratings.length
    ) {
      fetch(
        `${API}/place/${
          this.props.place_id && this.props.place_id
        }/ratings?limit=${LIMIT}`,
        {
          method: "GET",
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "컴디업 결과");
          if (res.message === "SUCCESS") {
            this.setState({
              reviewLists: res.informations,
            });
          }
        });
    }
  }

  fetchProduct = (e) => {
    let offset = e?.target.dataset.idx * LIMIT;

    fetch(
      `${API}/place/${
        this.props.place_id && this.props.place_id
      }/ratings?offset=${offset}&limit=${LIMIT}`,
      {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") },
      }
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          reviewLists: res.informations,
        })
      );
  };

  render() {
    const { handleDelete, isHover, ratings } = this.props;
    const { currentPage, postsPerPage, reviewLists, totalLength } = this.state;
    console.log("review list", reviewLists);

    return (
      <div className="product-detail-review-contents">
        <div className="product-detail-review-content">
          {reviewLists &&
            reviewLists.map((rating) => {
              return (
                <ReviewElement
                  isHover={isHover}
                  id_for_delete={reviewLists}
                  data={rating}
                  handleDelete={() => {
                    handleDelete(rating.id);
                  }}
                />
              );
            })}
        </div>
        <Pagination
          fetchProduct={this.fetchProduct}
          total={ratings && ratings.length}
          limit={LIMIT}
        />
      </div>
    );
  }
}

export default DetailSlider;
