import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

export const FavBadge = ({ isFavPhotoExist, fav }) => {
  const isFav = fav ? "#C80000" : "transparent";
  return (
    <div className="fav-badge">
      <FavIcon
        width={20}
        height={30}
        fill={isFav}
        displayAlert={!!isFavPhotoExist}
      />
    </div>
  );
};

export default FavBadge;
