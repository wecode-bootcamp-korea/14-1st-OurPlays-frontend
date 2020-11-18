import React, { Component } from "react";

class DetailSlider extends Component {
  render() {
    const { img } = this.props;
    console.log(img);
    return <li className="DetailSlider" key={img.id}></li>;
  }
}

export default DetailSlider;
