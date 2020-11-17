import React, { Component } from "react";
import Slider from "./components/Slider";
import LandingPage from "./components/LandingPage";
import Category from "../../Components/Category/Category";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <section className="Main">
        <div className="chat-bot">
          <span className="chat-bot-inner">
            <i className="far fa-smile"></i>채팅 문의
          </span>
        </div>
        <LandingPage />
        <Category />
        <Slider />
      </section>
    );
  }
}

export default Main;

