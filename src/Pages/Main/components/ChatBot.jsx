/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import ChatBoard from "./ChatBoard";
import "./ChatBot.scss";

const text = [
  "무엇을 도와드릴까요?",
  "예약 가능한 날짜가 아닙니다.",
  "확인 도와드리겠습니다.",
];
class ChatBot extends Component {
  state = {
    userComment: "",
    comments: [],
    cnt: 0,
  };
  handleChange = (e) => {
    this.setState({
      userComment: e.target.value,
    });
  };
  submitHandler = () => {
    const added = {
      name: "김동하",
      comment: this.state.userComment,
      chatComment: text[this.state.cnt],
      cnt: this.state.cnt++,
    };
    this.setState({
      comments: [...this.state.comments, added],
    });
  };

  render() {
    return (
      <div className="ChatBot">
        <div className="title">
          <span> 아워플레이스 채팅 문의 </span>{" "}
        </div>{" "}
        <div className="chatbot-container">
          <div className="chat-board">
            <ChatBoard comments={this.state.comments} />{" "}
          </div>{" "}
          <div className="chat-input">
            <input
              type="text"
              className="user-type"
              name="input"
              value={this.state.userComment}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <input
              type="button"
              className="send-btn"
              value="전송"
              onClick={() =>
                this.submitHandler(this.setState({ userComment: "" }))
              }
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default ChatBot;
