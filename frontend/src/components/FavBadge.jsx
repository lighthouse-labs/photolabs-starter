import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isAnyPhotoFavorited }) => {
  return (
    <div className='fav-badge'>

      <FavIcon displayAlert={isAnyPhotoFavorited} selected={isAnyPhotoFavorited}/>
    </div>
  );
};

export default FavBadge;