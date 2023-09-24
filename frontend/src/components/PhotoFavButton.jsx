import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ displayAlert, toggleFavourites, favourites, photoId }) {
  const colorCheck = favourites.includes(photoId);
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourites(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
