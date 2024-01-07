import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({data, favouritedPhotos, handleFavouritePhotos}) {

  const favourite = favouritedPhotos.some((favPhoto) => favPhoto.id === data.id)

  const handleFavourite = () => {
    handleFavouritePhotos(data)
  }
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={handleFavourite} selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;