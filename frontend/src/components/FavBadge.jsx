import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavorites }) => {
  return (
    <div className='fav-badge' onClick={() => showFavorites()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  );
};

export default FavBadge;