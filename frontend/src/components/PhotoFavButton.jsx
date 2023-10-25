import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = ({ photo, state, handleFav }) => {
  const onFavClick = () => {
    handleFav(photo.id)
  }
  const selected = state.favPhotos.includes(photo.id);

  return (
    <div className={'photo-list__fav-icon-svg photo-list__fav-icon'} onClick={onFavClick}>
      < FavBadge selected={selected} displayAlert={false} />
    </div>
  );
}

export default PhotoFavButton;