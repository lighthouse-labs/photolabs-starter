import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ displayAlert, isFavourite, onClick }) {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
