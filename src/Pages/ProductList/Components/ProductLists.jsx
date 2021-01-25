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
    const { productlists } = this.props;
    // console.log(productlists[0].category);
    return (
      productlists.length > 0 && (
        <>
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
                <div className="title">
                  {" "}
                  {productlists[0].category ? productlists[0].category : null}
                  {/* {productlists.category ? productlists.category : null} */}
                </div>
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
        </>
      )
    );
  }
}
export default ProductLists;
