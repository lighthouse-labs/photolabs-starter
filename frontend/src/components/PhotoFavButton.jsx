import React, { useCallback, useState, useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  // const handleIconClick = (id) => {
  //   props.handleFavClick(id);
  // };

  return (
    <div
      className="photo-list--fav-icon"
      onClick={() => props.addToLike(props.photoId)}
    >
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFavourite={props.isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
