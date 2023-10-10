import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favourites }) => {
  // console.log("isFavPhotoExist: ", isFavPhotoExist);
  const count = favourites.length;

    return (
    <div className='fav-badge'>
      <div className='favourites-count'>{count > 0 && count}</div>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;
