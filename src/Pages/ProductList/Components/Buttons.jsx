import React, { Component } from "react";
import "./Buttons.scss";

class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        {BUTTONS.map((button) => {
          return <button data-idx={button.id}>{button.id + 1}</button>;
        })}
      </div>
    );
  }
}

export default Buttons;

const BUTTONS = [
  {
    id: 0,
  },

  {
    id: 1,
  },

  {
    id: 2,
  },

  {
    id: 3,
  },
];
