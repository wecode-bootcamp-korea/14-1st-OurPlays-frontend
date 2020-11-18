import React, { Component } from "react";
import Slider from "./Slider";
import "./Sliders.scss";
class Sliders extends Component {
  state = {
    information: [],
    target: "",
  };
  componentDidMount() {
    fetch("/Data/Data.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          information: res.information,
          target: res.information[0],
        })
      );
  }

  nextId = () => {
    let newId = this.state.target.id + 1;
    this.setState({
      target: this.state.information[newId],
    });
  };
  preId = () => {
    let newId = this.state.target.id - 1;
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
            <h1>Ourplays picks</h1>
            <div className="slider-top-right">
              <input type="button" value="더보기" className="slider-top-more" />
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className={`slider-contents active-slide-${target.id}`}>
            <ul
              className="slider-contents-lists"
              style={{
                transform: `translateX(-${target && target.id * 370 + "px"})`,
              }}
            >
              {information.map((info, idx) => (
                <Slider key={idx} info={info} />
              ))}
            </ul>
            <div className="slider-btn">
              <i className="fa fa-arrow-circle-left left">
                <button
                  className="left-btn"
                  onClick={() => this.preId()}
                  disabled={target.id === 0}
                />
              </i>
              <i className="fa fa-arrow-circle-right right">
                <button
                  className="right-btn"
                  onClick={() => this.nextId()}
                  disabled={target.id === information.length - 1}
                />
              </i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sliders;
