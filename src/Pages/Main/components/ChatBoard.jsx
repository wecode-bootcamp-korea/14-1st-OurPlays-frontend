/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
class ChatBoard extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="board-container">
        {" "}
        {this.props.comments.map((comment) => {
          {
            return (
              <div className="wrap">
                <div className="user-div">
                  <div className="user-name-col"> {comment.name}</div>
                  <div className="user-comment-col">{comment.comment}</div>
                  <div className="time">{utc}</div>
                </div>{" "}
                <div className="chat-div">
                  <div className="chat-name"> 아워플레이스 </div>{" "}
                  <div className="chat-content"> {comment.chatComment} </div>{" "}
                </div>{" "}
              </div>
            );
          }
        })}{" "}
      </div>
    );
  }
}
export default ChatBoard;
