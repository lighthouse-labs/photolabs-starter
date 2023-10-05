import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { prettyFormat } from '@testing-library/react';


function PhotoFavButton(props) {
  // console.log("FavButton Props: ", props);

  function handleClick() {
    props.toggleFavourite(props.id)
  };

  const colorCheck = props.favourites.includes(props.id);

  return (
    <div className="photo-list__fav-icon"  onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={colorCheck}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
