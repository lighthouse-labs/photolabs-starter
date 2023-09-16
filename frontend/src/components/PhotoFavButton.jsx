import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = function({onChange, value}) {

  return (
    <div className="photo-list__fav-icon" onClick={onChange}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={value} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
