import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({onFavsClick, isFavPhotoExist }) => {
  return (
    <div onClick={onFavsClick} className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected/>
    </div>
  );
};

export default FavBadge;
