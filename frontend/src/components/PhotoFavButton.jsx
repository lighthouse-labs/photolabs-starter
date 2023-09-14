import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = function() {
  const [favClick, setFavClick] = useState(false);

  const handleClick = () => {
    return favClick ? setFavClick(false) : setFavClick(true);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favClick} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
