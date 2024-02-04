import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavorite, id, isFavorite }) {


return (
  <div onClick={() => toggleFavorite(id)} className={`photo-list__fav-icon ${isFavorite.includes(id) ? 'photo-list__fav-icon-svg' : ''}`}>
    <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isFavorite.includes(id)} />
    </div>
  </div>
);
}

export default PhotoFavButton;