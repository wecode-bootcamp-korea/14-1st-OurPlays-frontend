/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import BookMarkLists from "./components/BookMarkLists";
import { withRouter } from "react-router-dom";
import { API } from "../../config";
import "./BookMarkList.scss";

class BookMarkList extends Component {
  state = {
    bookmarkList: [],
    isMarkd: false,
  };

  // componentDidMount() {
  //   fetch("/Data/PlaceData.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const datas = res.information;
  //       this.setState({
  //         bookmarkList: datas,
  //       });
  //     });
  // }
  componentDidMount() {
    console.log("mark cdm");
    fetch(`${API}/user/placemarks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          this.setState({
            bookmarkList: res.information,
          });
        }
      });
  }
  render() {
    const { bookmarkList } = this.state;
    console.log(this.state.bookmarkList, "book");
    return (
      <div className="BookMarkList">
        <BookMarkLists bookmarkList={bookmarkList} />{" "}
      </div>
    );
  }
}

export default BookMarkList;
