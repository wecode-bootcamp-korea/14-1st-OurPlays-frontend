import React, { Component } from "react";

class SelectDropdown extends Component {
  render() {
    return (
      <div className="SelectedDropdown">
        <button type="button" className="ppl-select"></button>
        <span className="ppl-select-span">인원을 선택해주세요.</span>
      </div>
    );
  }
}

export default SelectDropdown;
