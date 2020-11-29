import React, { Component } from "react";
import MainLists from "./MainLists";
import "./MainList.scss";

class MainList extends Component {
  render() {
    return (
      <div className="MainList">
        <MainLists />
      </div>
    );
  }
}

export default MainList;
