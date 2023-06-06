import React, { useReducer, useState } from "react";
import FavBadge from "./FavBadge";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const [isFav, setIsFav] = useState(false);

  const handleClick = (id) => {
    props.addToFavourite(id);
    setIsFav(!isFav);
  };

  return (
    <div className="photo-list--fav-icon" onClick={() => handleClick(props.id)}>
      <div className="photo-list--fav-icon-svg">
        <FavBadge
          isFavourite={isFav}
          // isFav={isFav}
          id={props.id}
          favouritePhotos={props.favouritePhotos}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
