import React, { Component } from "react";
import ControlButtons from "./ControlButtons";
import ModalCount from "./ModalCount";
import ModalPrice from "./ModalPrice";
import RoomList from "./RoomList";
import Buttons from "./Buttons";
import "../ProductList.scss";
import { API } from "../../../config";

class ProductLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productlists: [],
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
          productlists: res.information,
        })
      );
  };

  openModalPrice = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  openModalCount = () => {
    this.setState({ modal: !this.state.modal });
  };

  filterLists = (filteredItem) => {
    this.setState({ productlists: filteredItem });
  };

  render() {
    const { modal, isModal } = this.state;
    const { productlists } = this.state;
    return (
      <>
        {productlists.length > 0 ? (
          <div className="ProductLists">
            <div className={modal ? "" : "display-none"}>
              <ModalCount
                PLACEINFO={productlists}
                openModalCount={this.openModalCount}
              />
            </div>
            <div className={isModal ? "" : "display-none"}>
              <ModalPrice
                PLACEINFO={productlists}
                openModalPrice={this.openModalPrice}
                filterLists={this.filterLists}
              />
            </div>
            <div className="product-list">
              <section className="header">
                <div className="title">원룸</div>
                <div className="filter">
                  <ControlButtons
                    openModalPrice={this.openModalPrice}
                    openModalCount={this.openModalCount}
                  />
                </div>
              </section>
              <section className="room-lists">
                <RoomList PLACEINFO={productlists} />
              </section>
              <Buttons />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default ProductLists;
