// import React, { Component } from "react";

// class Main extends Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default Main;

import React, { Component } from "react";
import Sliders from "./components/Sliders";
import LandingPage from "./components/LandingPage";
import Category from "../../Components/Category/Category";
// import ChatBot from "./components/ChatBot";
import "./Main.scss";
import "../../Styles/common.scss";

class Main extends Component {
  state = {
    isChatBot: false,
  };
  chatbotHandler = () => {
    this.setState({});
  };
  render() {
    return (
      <div className="Main">
        <div className="chat-bot">
          <span className="chat-bot-inner">
            <i className="far fa-smile" onClick={() => this.chatbotHandler()}>
              {" "}
            </i>
            채팅 문의
          </span>{" "}
          {/* <ChatBot /> */}
        </div>
        <LandingPage />
        <Category />
        <Sliders />
      </div>
    );
  }
}

export default Main;
