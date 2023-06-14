import React from "react";

import { FavIcon } from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { toggleFavorite, filled } = props;

  return (
    // The parent div has the onlick handler and not the child FavIcon.
    <div className="photo-list--fav-icon" onClick={toggleFavorite}>
      <div className="photo-list--fav-icon-svg">
        {/* the color of the icon changes based on the filled state. */}
        {/* the width of the outline changes based on the filled state. */}
        <FavIcon
          fill={filled === true ? "#C80000" : "#EEEEEE"}
          outlineWidth={filled === true ? 4 : 2}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;