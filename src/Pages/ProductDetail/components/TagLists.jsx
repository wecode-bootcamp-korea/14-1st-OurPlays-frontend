import React, { Component } from "react";

class TagList extends Component {
  render() {
    const { tag } = this.props;
    return (
      <li className="tag-list">
        <a href="/">{tag.tag}</a>
      </li>
    );
  }
}

export default TagList;
