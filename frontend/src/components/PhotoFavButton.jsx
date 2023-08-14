import React, { useState } from 'react';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ displayAlert, favoritedPhotoIds, toggleFavorite, photoId}) => {

  const Favorite = favoritedPhotoIds.includes(photoId); //Check global favorite state
  const handleIconClick = () => {
    console.log('Favorite button clicked!');
    toggleFavorite(photoId); //Add it to favorite ids
  };

  return (
    <div className="photo-list__fav-icon fav-position">
      <div className="photo-list__fav-icon-svg"><FavIcon selected={Favorite} displayAlert={displayAlert} handleIconClick={handleIconClick} /></div>
    </div>
  );
};

export default PhotoFavButton;
