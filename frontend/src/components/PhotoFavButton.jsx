import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';

import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favoritedPhotos, setFavoritedPhotos }) {
  const isActive = favoritedPhotos && favoritedPhotos.includes(photoId);
  console.log('setFavoritedPhotos in PhotoFavButton', typeof setFavoritedPhotos);
  const toggleFavoriteStatus = () => {
    if (isActive) {
      setFavoritedPhotos(prevPhotos => {
        const updatedPhotos = prevPhotos.filter(id => id !== photoId);
        console.log('Removing photo from favorites:', photoId, updatedPhotos);
        return updatedPhotos;
      });
    } else {
      setFavoritedPhotos(prevPhotos => {
        const updatedPhotos = [...prevPhotos, photoId];
        console.log('Adding photo to favorites:', photoId, updatedPhotos);
        return updatedPhotos;
      });
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