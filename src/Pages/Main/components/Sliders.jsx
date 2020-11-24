import React, { Component } from "react";
import Slider from "./Slider";
import "./Sliders.scss";
import API from "../../../config";
import API_yh from "../../../config";

class Sliders extends Component {
  state = {
    information: [],
    target: "",
  };

  // componentDidMount() {
  //   fetch("http://10.58.7.159:8000/ProductList/ProductDetail")
  //     .then((res) => res.json())
  //     .then((res) =>
  //       this.setState({
  //         information: res.information,
  //         target: res.information[0],
  //       })
  //     );
  // }

  componentDidMount() {
    fetch("/Data/PlaceData.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          information: res.information,
          target: res.information[0],
        })
      );
  }

  onButtonHandler = (e) => {
    let newId;
    const selectedBtn = e.target.name;
    if (selectedBtn === "pre") {
      newId = this.state.target.id - 1;
    }
    if (selectedBtn === "next") {
      newId = this.state.target.id + 1;
    }
    this.setState({
      target: this.state.information[newId],
    });
  };

  render() {
    const { information, target } = this.state;
    if (target.id === information.length - 1) {
      this.setState({
        target: information[0],
      });
    }

    return (
      <section className="Slider">
        <div className="slider-container">
          <div className="slider-top">
            <h1> Ourplays picks </h1>{" "}
            <div className="slider-top-right">
              <input type="button" value="더보기" className="slider-top-more" />
              <i className="fas fa-arrow-right"> </i>{" "}
            </div>{" "}
          </div>{" "}
          <div className={`slider-contents active-slide-${target.id}`}>
            <ul
              className="slider-contents-lists"
              style={{
                transform: `translateX(-${target && target.id * 370 + "px"})`,
              }}
            >
              {information.map((info, idx) => (
                <Slider key={idx} info={info} />
              ))}{" "}
            </ul>{" "}
            <div className="slider-btn">
              <i className="fa fa-arrow-circle-left left">
                <button
                  className="left-btn"
                  name="pre"
                  onClick={(e) => {
                    this.onButtonHandler(e);
                  }}
                  disabled={target.id === 0}
                />{" "}
              </i>{" "}
              <i className="fa fa-arrow-circle-right right">
                <button
                  className="right-btn"
                  name="next"
                  onClick={(e) => {
                    this.onButtonHandler(e);
                  }}
                  disabled={target.id === information.length - 1}
                />{" "}
              </i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    );
  }
}

export default Sliders;
