import React, { useCallback, useState } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [fav, setFav] = useState(false);

  const handleIconClick = () => {
    setFav(!fav);
  };

  return (
    <div className="photo-list--fav-icon" onClick={handleIconClick}>
      <div className="photo-list--fav-icon-svg">
        <FavBadge fav={fav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
