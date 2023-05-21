import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

export const FavBadge = (props) => {
  return (
    <div className="fav-badge">
      <FavIcon
        width={20}
        height={30}
        // fill={isFavourite}
        fill={props.isFavourite ? props.isFavourite : "#C80000"}
        displayAlert={!!props.isFavPhotoExist}
      />
    </div>
  );
};

export default FavBadge;
