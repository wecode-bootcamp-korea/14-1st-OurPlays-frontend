import React, { Component } from "react";
import ReviewElement from "./ReviewElement";
import Pagination from "./Pagination";
import "./ReviewList.scss";
import review_yh from "../../../config";
const LIMIT = 4;
class DetailSlider extends Component {
  state = {
    posts: [],
    reviewLists: [],
    currentPage: 1,
    postsPerPage: 4,
    place_id: null,
  };

  componentDidMount() {
    this.setState({
      place_id: this.props.place_id,
      // reviewLists: this.props.ratings,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.place_id !== this.props.place_id) {
      fetch(
        `http://10.58.7.159:8000/ProductList/${
          this.props.place_id && this.props.place_id
        }/ratings`
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            reviewLists: res.informations,
          })
        );
    }
  }

  // paginate = (pageNumber) => {
  //   this.setState({
  //     currentPage: pageNumber,
  //   });
  // };

  fetchProduct = (cur) => {
    // const offset = e.target.dataset.idx * LIMIT;
    const offset = cur * LIMIT;
    fetch(
      `http://10.58.7.159:8000/ProductList/${
        this.props.place_id && this.props.place_id
      }/ratigns/?${LIMIT}&offset=${offset}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          reviewLists: res,
        })
      );
  };

  render() {
    const { handleDelete, isHover, ratings } = this.props;
    const { currentPage, postsPerPage, reviewLists } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ratings.slice(indexOfFirstPost, indexOfLastPost);
    console.log(this.state.reviewLists);

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
          total={reviewLists && reviewLists.length}
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
