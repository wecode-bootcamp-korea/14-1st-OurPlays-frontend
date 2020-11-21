import React, { Component } from "react";
import Sliders from "./components/Sliders";
import LandingPage from "./components/LandingPage";
import Category from "../../Components/Category/Category";
import "./Main.scss";
import "../../Styles/common.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="chat-bot">
          <span className="chat-bot-inner">
            <i className="far fa-smile"> </i>채팅 문의{" "}
          </span>{" "}
        </div>{" "}
        <LandingPage />
        <Category />
        <Sliders />
      </div>
    );
  }
}

export default Main;
