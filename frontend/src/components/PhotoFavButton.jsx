import React, { useCallback, useState, useReducer } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  // { dispatch, handleIconClick, fav }

  // console.log("isFav", props.isFav);
  // console.log("isFavourite", isFavourite);

  const handleIconClick = (e) => {
    console.log("props", props);
    console.log("props.id", props.id);
    props.handleFavClick();
    // props.setFav(!fav);
    // if (!fav) {
    //   dispatch(1);
    // } else {
    //   dispatch(-1);
    // }
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleIconClick}>
      {/* countFavourite: {countFavourite} */}
      <div className="photo-list--fav-icon-svg">
        <FavBadge isFav={props.isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
