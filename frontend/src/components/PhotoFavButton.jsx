import React, { useReducer, useState } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {

  const handleClick = () => {
    props.addToFavourite(props.id);
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon
          width={20}
          height={30}
          fill={props.isFavourite ? "#C80000" : "transparent"}
          displayAlert={!!props.isFavPhotoExist}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
