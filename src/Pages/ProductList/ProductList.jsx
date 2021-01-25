import React, { Component } from "react";
import ProductLists from "../ProductList/Components/ProductLists";
import { API } from "../../config";
import qs from "query-string";
import "./ProductList.scss";

class ProductList extends Component {
  state = {
    productlists: [],
  };

  componentDidMount = () => {
    let newParams = new URLSearchParams(this.props.location.search).get(
      "category_id"
    );

    const get_category_id = {
      원룸: 1,
      사무실: 2,
      아파트: 4,
      옥상: 5,
      스튜디오: 7,
      카페식당: 8,
    };

    fetch(`${API}/place?category_id=${get_category_id[newParams]}`, {
      headers: {
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productlists: res.information,
        })
      );
  };

  render() {
    console.log(this.props, this.state.productlists, "ProductList");

    return this.state.productlists ? (
      <div className="ProductList">
        <ProductLists
          productlists={this.state.productlists && this.state.productlists}
          categorie_title={this.state.categories && this.state.categories}
        />
      </div>
    ) : (
      <div className="ProductList">검색 결과가 없습니다.</div>
    );
  }
}

export default ProductList;
