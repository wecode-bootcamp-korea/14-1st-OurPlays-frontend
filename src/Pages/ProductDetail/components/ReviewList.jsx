/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import ReviewElement from "./ReviewElement";
import Pagination from "./Pagination";
import "./ReviewList.scss";
import { API } from "../../../config";
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

  componentDidMount() {
    console.log("ReviewList CDM");

    // this.setState({
    //   place_id: this.props.place_id,
    //   ratings: this.props.ratings,
    // });
  }

  componentDidUpdate(prevProps) {
    console.log("ReviewList CDUpadate");
    console.log(prevProps.ratings.length, this.props.ratings.length, "length");
    if (
      prevProps.place_id !== this.props.place_id ||
      (prevProps.isShowModal === true && this.props.isShowModal === false) ||
      prevProps.ratings.length !== this.props.ratings.length
    ) {
      console.log(prevProps.isShowModal, this.props.isShowModal);
      fetch(
        `${API}/ProductList/${
          this.props.place_id && this.props.place_id
        }/ratings?limit=${LIMIT}`,
        {
          method: "GET",
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.message === "SUCCESS") {
            this.setState({
              totalLength: res.informations,
              reviewLists: res.informations,
            });
          }
        });
    }
  }

  // paginate = (pageNumber) => {
  //   this.setState({
  //     currentPage: pageNumber,
  //   });
  // };

  fetchProduct = (e) => {
    console.log("fetchProduct execute");
    let offset = e?.target.dataset.idx * LIMIT;
    // let offset = cur * LIMIT;

    fetch(
      `http://10.58.7.159:8000/ProductList/${
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
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = ratings.slice(indexOfFirstPost, indexOfLastPost);

    // console.log(reviewLists && reviewLists, "reviewLIST, review list");
    // console.log(
    //   ratings && ratings,
    //   "props",
    //   this.state.ratings && this.state.ratings,
    //   "state"
    // );

    return (
      <div className="product-detail-review-contents">
        <div className="product-detail-review-content">
          {reviewLists &&
            reviewLists.map((rating) => {
              return (
                <ReviewElement
                  isHover={isHover}
                  data={rating}
                  handleDelete={() => {
                    handleDelete(rating.id);
                  }}
                />
              );
            })}
          {/* {currentPosts &&
                                            currentPosts.map((rating) => {
                                              return (
                                                <ReviewElement
                                                  isHover={isHover}
                                                  data={rating}
                                                  handleDelete={() => {
                                                    handleDelete(rating.id);
                                                  }}
                                                />
                                              );
                                            })} */}
          {/* {comments.map((comment) => {
                                                                                            return (
                                                                                              <ReviewElement
                                                                                                ratings={ratings}
                                                                                                isHover={isHover}
                                                                                                data={comment}
                                                                                                handleDelete={() => {
                                                                                                  handleDelete(comment.id);
                                                                                                }}
                                                                                              />
                                                                                            );
                                                                                          })}{ */}
        </div>
        <Pagination
          fetchProduct={this.fetchProduct}
          total={ratings && ratings.length}
          limit={LIMIT}
          // postsPerPage={postsPerPage}
          // totalPosts={ratings.length}
          // paginate={this.paginate}
        />
      </div>
    );
  }
}

export default DetailSlider;
