import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favorite }) => {
  const isFavorite = favorite.length > 0;
  return (
    <div className='fav-badge'>
      {isFavorite ? (<FavIcon displayAlert={isFavorite} selected={true} />) :
        (<FavIcon />)}
    </div>
  )
};

export default FavBadge;