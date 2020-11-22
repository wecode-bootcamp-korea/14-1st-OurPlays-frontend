import React, { Component } from "react";
import ReviewElement from "./ReviewElement";
import Pagination from "./Pagination";
import "./ReviewList.scss";

class DetailSlider extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 4,
  };

  componentDidMount() {
    this.setState({
      posts: this.props.ratings,
    });
  }

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    console.log(this.state.posts, "pagi");
    const { handleDelete, isHover, ratings } = this.props;
    const { currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ratings.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="product-detail-review-contents">
        <div className="product-detail-review-content">
          {currentPosts &&
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
            })}
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
          postsPerPage={postsPerPage}
          totalPosts={ratings.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default DetailSlider;
