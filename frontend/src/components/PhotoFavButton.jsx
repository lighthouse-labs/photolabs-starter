import React, { useCallback, useState, useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  // const isFavPhotoExist = props.favouritePhotos.length > 0;
  const isFavourite = props.isFav ? "#C80000" : "transparent";

  const handleIconClick = (id) => {
    props.handleFavClick(id);
  };

  return (
    <div
      className="photo-list--fav-icon"
      onClick={() => handleIconClick(props.photoId)}
    >
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFavourite={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
