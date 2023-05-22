import React, { useCallback, useState, useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  // const handleIconClick = (id) => {
  //   props.handleFavClick(id);
  // };

  // console.log("id", props.photoId);
  console.log("Favbutton isFavourite", props.isFavourite);

  const test = (e) => {
    //
  }

  return (
    <div
      className="photo-list--fav-icon"
      // onClick={() => props.addToLike(props.photoId)}
      onClick={() =>
        props.dispatch({ type: "FAV_PHOTO_ADDED", payload: props.photoId })
        
      }
    >
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFavourite={props.isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
