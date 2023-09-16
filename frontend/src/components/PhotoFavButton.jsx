import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorited, toggleFavorite }) {
  return (
    <div onClick={toggleFavorite} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;