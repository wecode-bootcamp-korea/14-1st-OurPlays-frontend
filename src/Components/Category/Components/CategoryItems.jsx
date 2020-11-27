import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../Category.scss";

class CategoryItems extends Component {
  state = {
    PLACEINFO: [],
  };

  componentDidMount() {
    fetch(`http://10.58.7.159:8000/place`)
      .then((res) => res.json())
      .then((res) => console.log(res));
    // .then((res) => this.setState({ PLACEINFO: res.information }));
  }

  goToList = () => {
    console.log(this.state.PLACEINFO);
    // this.props.history.push(`/place`);
  };

  render() {
    return (
      <div className="category-items">
        {CATEGORYITEMS.map((categoryItem) => {
          return (
            <div
              key={categoryItem.id}
              className="category-item"
              onClick={this.goToList}
            >
              <img src={categoryItem.src} alt={categoryItem.alt} />
              <div className="category-name">{categoryItem.categoryName}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(CategoryItems);

const CATEGORYITEMS = [
  {
    id: 0,
    src: "../images/youngjoonpark/category-img/원룸.png",
    alt: "원룸-img",
    categoryName: "원룸",
  },
  {
    id: 1,
    src: "../images/youngjoonpark/category-img/사무실.png",
    alt: "사무실-img",
    categoryName: "사무실",
  },
  {
    id: 2,
    src: "../images/youngjoonpark/category-img/빌라.png",
    alt: "빌라-img",
    categoryName: "빌라",
  },
  {
    id: 3,
    src: "../images/youngjoonpark/category-img/아파트.png",
    alt: "아파트-img",
    categoryName: "아파트",
  },
  {
    id: 4,
    src: "../images/youngjoonpark/category-img/옥상.png",
    alt: "옥상-img",
    categoryName: "옥상",
  },
  {
    id: 5,
    src: "../images/youngjoonpark/category-img/주택.png",
    alt: "주택-img",
    categoryName: "주택",
  },
  {
    id: 6,
    src: "../images/youngjoonpark/category-img/스튜디오.png",
    alt: "스튜디오-img",
    categoryName: "스튜디오",
  },
  {
    id: 7,
    src: "../images/youngjoonpark/category-img/카페식당.png",
    alt: "카페식당-img",
    categoryName: "카페식당",
  },
  {
    id: 8,
    src: "../images/youngjoonpark/category-img/팬션.png",
    alt: "펜션-img",
    categoryName: "펜션",
  },
  {
    id: 9,
    src: "../images/youngjoonpark/category-img/그 외 장소.png",
    alt: "그 외 장소-img",
    categoryName: "그 외 장소",
  },
];
