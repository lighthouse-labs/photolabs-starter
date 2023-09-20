import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritedPhotoIds, toggleFavoritesView }) => {
  const isFavPhotoExist = favoritedPhotoIds.length > 0;
  return (
    <div className='fav-badge' onClick={toggleFavoritesView}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;