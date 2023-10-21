import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {
  const {
    toggleFavorite,
    updateAlert,
    photoId,
    isPhotoFavorited
  } = props;

  const selected = isPhotoFavorited(photoId);
  let displayAlert = false;
  
  const handleIconClick = () => {
    toggleFavorite(photoId);
    displayAlert = updateAlert();
  };

  return (
    <div className="photo-list__fav-icon">
      {
        <FavIcon displayAlert= {displayAlert} selected={selected} onClick={handleIconClick}/>
      }
    </div>
  );
};

export default PhotoFavButton;