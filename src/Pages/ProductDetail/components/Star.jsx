import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

class Star extends Component {
  render() {
    const { rating, handleRatingHover, handleRating, isHover } = this.props;
    return (
      <div className="Star">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />
              <FaStar
                className="star"
                size={50}
                color={ratingValue <= (isHover || rating) ? "#2c78f2" : null}
                onMouseOver={() => handleRatingHover(ratingValue)}
              />
            </label>
          );
        })}
      </div>
    );
  }
}

export default Star;
