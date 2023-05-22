import React, { useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const onFavClick = (e) => {
    props.dispatch({
      type: "FAV_PHOTO_ADDED",
      payload: props.photoId,
    });
  };

  return (
    <div className="photo-list--fav-icon" onClick={onFavClick}>
      <div className="photo-list--fav-icon-svg">
        <FavBadge
          isFavourite={props.isFavourite}
          id={props.id}
          favouritePhotos={props.favouritePhotos}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
