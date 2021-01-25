import React, { Component } from "react";
import Sliders from "./components/Sliders";
import LandingPage from "./components/LandingPage";
import Category from "../../Components/Category/Category";
import ChatBot from "./components/ChatBot";
import MainList from "./components/MainList";

import "./Main.scss";
import "../../Styles/common.scss";
import "./components/MainList.scss";

class Main extends Component {
  state = {
    isChatBot: false,
  };
  chatbotHandler = () => {
    this.setState({
      isChatBot: !this.state.isChatBot,
    });
  };
  render() {
    return (
      <div className="Main">
        <div className="chat-bot">
          <span
            className="chat-bot-inner"
            onClick={() => this.chatbotHandler()}
          >
            <i className="far fa-smile"></i>
            채팅 문의
          </span>
          <ChatBot chatOn={this.state.isChatBot} />
        </div>
        <LandingPage />
        <Category />
        <Sliders />
        <MainList />
      </div>
    );
  }
}

export default Main;
