/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class RegisterPath extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { path, idx, onCheckRecommendPath } = this.props;
    return (
      <li>
        <span>
          <input
            type="checkbox"
            value={path.ko}
            id="path"
            name={path.en}
            onChange={onCheckRecommendPath}
          />
          <span>{path.ko}</span>
        </span>
      </li>
    );
  }
}

export default RegisterPath;
