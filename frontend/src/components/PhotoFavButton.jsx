import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";

import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  // const [isFavoriteb, setIsFavoriteb] = useState(false);
  const { toggleFavoritePhoto, isPhotoFavorite } = props;

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavorite={isPhotoFavorite()} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
