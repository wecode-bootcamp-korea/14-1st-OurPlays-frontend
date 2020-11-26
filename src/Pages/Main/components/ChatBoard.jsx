/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

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
                <div className="user-div"> {comment.comment} </div>{" "}
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
