import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavorite, id, favorite }) {
  return (

    <div onClick={() => toggleFavorite(id)} className="photo-list__fav-icon">
      {Array.isArray(favorite) && favorite.includes(id) ? (
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={true} />
        </div>
      ) : (
        <div className="photo-list__fav-icon-svg">
          <FavIcon />
        </div>
      )}
    </div>
  );
}

export default PhotoFavButton;