import React, { useState } from "react";
import starEmpty from "../icons/star-rating-white.svg";
import starFilled from "../icons/star-rating-filled.svg";
import "./StarRating.css";

export default function StarRating({ maxStars, filledStars }) {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(filledStars);

  const handleStarClick = (starIndex) => {
    setSelectedStars(starIndex + 1);
  };

  const handleStarHover = (starIndex) => {
    setHoveredStars(starIndex + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {[...Array(maxStars)].map((_, index) => {
        const isFilled = hoveredStars > index || selectedStars > index;
        return (
          <img
            key={index}
            src={isFilled ? starFilled : starEmpty}
            alt={isFilled ? "Filled Star" : "Empty Star"}
            className={`star-icon ${isFilled ? "star-icon-filled" : ""}`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
          />
        );
      })}
    </div>
  );
}
