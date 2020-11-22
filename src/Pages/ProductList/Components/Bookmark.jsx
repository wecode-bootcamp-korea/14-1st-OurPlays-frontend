import React, { Component } from 'react';

class Bookmark extends Component {
  constructor() {
    super();
    this.state = {
      bookmark: false,
    };
  }

  handleBookmark = () => {
    const { bookmark } = this.state;
    this.setState({ bookmark: !bookmark });
  };

  render() {
    const { bookmark } = this.state;
    return (
      <div className={Bookmark}>
        <div className='bookmark'>
          <img
            onClick={this.handleBookmark}
            className='bookmark-empty'
            src={
              bookmark
                ? '../images/youngjoonpark/bookmark-filled.png'
                : '../images/youngjoonpark/bookmark-empty.png'
            }
            alt='북마크'
          />
        </div>
      </div>
    );
  }
}

export default Bookmark;
