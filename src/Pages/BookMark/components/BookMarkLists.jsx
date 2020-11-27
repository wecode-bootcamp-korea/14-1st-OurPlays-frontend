import React, { Component } from "react";
import Room from "./Room";
import "./BookMarkLists.scss";
class BookMarkLists extends Component {
  render() {
    return (
      <div className="book-mark-container">
        <h2> 관심 장소 </h2>
        <div className="book-mark-icons">
          <i class="fas fa-hashtag"> </i> <i class="fas fa-plus"> </i>
        </div>
        <div className="book-mark-contents">
          <ul className="slider-contents-lists">
            {this.props.bookmarkList?.map((info, idx) => {
              return <Room info={info} idx={idx} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default BookMarkLists;
