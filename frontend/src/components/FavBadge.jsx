import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

export const FavBadge = (props) => {
  const isFavourite = props.isFav ? "#C80000" : "transparent";

  return (
    <div className="fav-badge">
      <FavIcon
        width={20}
        height={30}
        fill={isFavourite}
        displayAlert={!!props.isFavPhotoExist}
      />
    </div>
  );
};

export default FavBadge;
