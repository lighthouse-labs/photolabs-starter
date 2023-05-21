import React, { useCallback, useState, useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const handleIconClick = (id) => {
    props.handleFavClick(id);
  };

  return (
    <div
      className="photo-list--fav-icon"
      onClick={() => handleIconClick(props.photoId)}
    >
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFav={props.isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
