import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const [clicked, setClicked] = useState(false);
  function handleClick(e) {
    //console.log(props);
    setClicked(!clicked);
    // setClicked(props.toggleFavourite);
    props.addFavourite(props.photo);
    e.stopPropagation()//stop it from parents to access it.
  }
  return (
    <div className="photo-list__fav-icon" onClick={(e) => handleClick(e)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={clicked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
