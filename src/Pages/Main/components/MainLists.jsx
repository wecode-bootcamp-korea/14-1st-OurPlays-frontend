import React, { Component } from "react";
import RoomCard from "./RoomCard";
import "./MainList.scss";
import { API } from "../../../config";

class MainLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainLists: [],
      isModal: false,
      modal: false,
    };
  }

  componentDidMount = () => {
    fetch(`${API}/place`, {
      headers: {
        Authorization: localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          MainLists: res.information,
        })
      );
  };

  render() {
    const { modal, isModal } = this.state;
    const { MainLists } = this.state;
    console.log(MainLists);
    return (
      <>
        <div className="product-list">
          <header className="header">
            {" "}
            <h2 className="title">최고 인기 장소</h2>
          </header>
          <section className="room-lists">
            <RoomCard MainLists={MainLists} />{" "}
          </section>{" "}
        </div>{" "}
      </>
    );
  }
}

export default MainLists;
