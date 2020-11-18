import React, { Component } from "react";
import DetailSlider from "./components/DetailSlider";

class ProductDetail extends Component {
  state = {
    imageData: [],
  };
  componentDidMount() {
    fetch("/Data/DetailImage.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          imageData: res.data,
        })
      );
  }
  render() {
    console.log(this.state.imageData);
    const { imageData } = this.state;
    return (
      <article className="ProductDetail">
        <div className="product-datail-container">
          <div className="image-slider">
            <ul className="image-sldier-wrap">
              {imageData.map((img) => {
                return <DetailSlider img={img} />;
              })}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default ProductDetail;
