import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import qs from "query-string";
import { API } from "../../../config";

class CategoryItems extends Component {
  state = {
    productlists: [],
  };

  render() {
    const { categoryItem } = this.props;
    console.log(categoryItem.id, "Asdasdasd");
    return (
      <div className="category-items">
        <Link
          className="link"
          to={`/place?category_id=${categoryItem.categoryName}`}
        >
          <div
            key={categoryItem.id}
            className="category-item"
            info={this.state.productlists}
          >
            <img src={categoryItem.src} alt={categoryItem.alt} />{" "}
            <div className="category-name"> {categoryItem.categoryName} </div>{" "}
          </div>{" "}
        </Link>
      </div>
    );
  }
}

export default withRouter(CategoryItems);
