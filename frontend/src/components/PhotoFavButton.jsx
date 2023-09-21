import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({onChange, value, photo}) => {

  return (
    <div className="photo-list__fav-icon" onClick={() => onChange(photo)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={value} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
