import React from 'react';
import FavIcon from './FavIcon';
import FavoritePhotosContext from './FavoritePhotosContext';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favoritedCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
      {isFavPhotoExist && <span className="notification-badge">{favoritedCount}</span>}
    </div>
  ) 
};

export default FavBadge;