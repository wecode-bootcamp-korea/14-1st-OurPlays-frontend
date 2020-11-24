import React, { Component } from "react";
import BookMarkLists from "./components/bookmark/BookMarkLists";
import "./BookMarkList.scss";

class BookMarkList extends Component {
  state = {
    bookmarkList: [],
  };

  componentDidMount() {
    fetch(
      `http://10.58.7.159:8000/ProductList/ProductDetail/${this.props.match.params.place_id}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.information, "전체 데이터 중 방 하나");
        // this.setState({
        //   placeinfo: res.information[0],
        //   ratings: res.information[0].rating,
        // });
      });
  }

  // componentDidMount() {
  //   fetch(`/Data/PlaceData.json`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const datas = res.information;
  //       this.setState({
  //         placeinfo: datas,
  //       });
  //     });
  // }

  // componentDidMount() {
  //   fetch(`/Data/PlaceData.json`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const datas = res.information;
  //       this.setState({
  //         placeinfo: datas,
  //       });
  //     });
  // }

  render() {
    const { bookmarkList } = this.state;
    return (
      <div className="BookMarkList">
        <BookMarkLists bookmarkList={bookmarkList} />{" "}
      </div>
    );
  }
}

export default BookMarkList;
