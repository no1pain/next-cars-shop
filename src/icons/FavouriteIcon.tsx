"use client";

import { useState } from "react";

export const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavouriteClick = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <button
      onClick={handleFavouriteClick}
      className="hover:opacity-80"
      aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <img
        src={isFavourite ? "./images/heart.svg" : "./images/heart-pressed.svg"}
        alt="Heart Icon"
        className="w-6 h-6"
      />
    </button>
  );
};
