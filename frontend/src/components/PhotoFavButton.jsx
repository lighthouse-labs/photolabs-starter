import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";

import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavorite={isFavorite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
