import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavorites, displayFavorites }) => {
  return (
    <div className='fav-badge' onClick={() => showFavorites()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} displayFavorites={displayFavorites}/>
    </div>
  );
};

export default FavBadge;