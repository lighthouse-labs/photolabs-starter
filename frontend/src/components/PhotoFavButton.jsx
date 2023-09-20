import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';

import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favoritedPhotos, updateToFavPhotoIds }) {
  
  const isActive = favoritedPhotos && favoritedPhotos.includes(photoId);

  const toggleFavoriteStatus = () => {
    
    
    // The hook will handle whether to add or remove it from the favorites.
    updateToFavPhotoIds(photoId);
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