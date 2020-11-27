import React, { Component } from "react";

class DetailSlider extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="DetailSlider" key={img.idx}>
        <img src={img.img} alt="productImg" />
      </div>
    );
  }
}

export default DetailSlider;
