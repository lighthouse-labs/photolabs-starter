import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favoritedPhotos, setFavoritedPhotos }) {
  const isActive = favoritedPhotos.includes(photoId);

  const toggleFavoriteStatus = () => {
      if (isActive) {
          setFavoritedPhotos(prevPhotos => prevPhotos.filter(id => id !== photoId));
      } else {
          setFavoritedPhotos(prevPhotos => [...prevPhotos, photoId]);
      }
  };

  return (
      <div className="photo-list__fav-icon" onClick={toggleFavoriteStatus}>
          <div className="photo-list__fav-icon-svg">
              <FavIcon selected={isActive} />
          </div>
      </div>
  );
}

export default PhotoFavButton; 