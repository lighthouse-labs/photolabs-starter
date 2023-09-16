import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritedPhotoIds }) => {
  const isFavPhotoExist = favoritedPhotoIds.length > 0;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;