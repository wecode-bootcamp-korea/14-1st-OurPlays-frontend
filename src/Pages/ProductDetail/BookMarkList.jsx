import React, { Component } from "react";
import BookMarkLists from "./components/bookmark/BookMarkLists";
import "./BookMarkList.scss";

class BookMarkList extends Component {
  state = {
    placeinfo: [],
  };

  componentDidMount() {
    fetch(`/Data/PlaceData.json`)
      .then((res) => res.json())
      .then((res) => {
        const datas = res.information;
        this.setState({
          placeinfo: datas,
        });
      });
  }
  render() {
    const { placeinfo } = this.state;
    return (
      <div className="BookMarkList">
        <BookMarkLists placeinfo={placeinfo} />{" "}
      </div>
    );
  }
}

export default BookMarkList;
