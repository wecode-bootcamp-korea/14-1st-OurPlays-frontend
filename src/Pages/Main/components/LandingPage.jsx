import React, { Component } from "react";
import { withRoute, Link } from "react-router-dom";
import "./LandingPage.scss";

class LandingPage extends Component {
  goToImage = () => {
    this.props.history.push("/ImageUpload");
  };
  render() {
    return (
      <section className="LandingPage">
        <div className="landingPage-container">
          <article className="main-text-wrap">
            <div className="text-wrap-border">
              <h1 className="main-text-top">
                당신의 공간도 촬영장소가 될 수 있습니다{" "}
              </h1>{" "}
              <div className="main-divider"> </div>{" "}
              <h1 className="main-text-bottom">
                스튜디오부터 아파트와 주택, 사무실에서 카페와 펜션까지 당신의
                공간을 사진 몇 장만으로 공유하고 수익을 올려보세요.{" "}
              </h1>{" "}
            </div>{" "}
          </article>{" "}
        </div>{" "}
        <div className="register-place-button">
          <Link to="/UploadImage">
            <input
              type="button"
              className="register-btn"
              value="촬영 장소 등록하기"
            />
          </Link>{" "}
        </div>{" "}
      </section>
    );
  }
}

export default LandingPage;
