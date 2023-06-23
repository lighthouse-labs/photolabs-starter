import React, { useState } from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  // Destructure the props to extract toggleFavorite and filled
  const { toggleFavorite, filled } = props;
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        {/* Render the FavIcon component */}
        <FavIcon
          // Set the fill color based on the value of filled
          fill={filled === true ? "#C80000" : "#EEEEEE"}
          // Set the outline width based on the value of filled
          outlineWidth={filled === true ? 4 : 2}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
