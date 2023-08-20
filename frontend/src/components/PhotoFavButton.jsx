import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const toggleFavourite = props.toggleFavourite;
  const favourite = props.favourite;
  const photoId = props.photoId;
  return (
    <div className="photo-list__fav-icon" onClick={() => {
      toggleFavourite(photoId);
    }}>
      <div>
        <FavIcon selected={favourite.includes(photoId)? true: false}   ></FavIcon>
      </div>
    </div>
  );
}

export default PhotoFavButton;