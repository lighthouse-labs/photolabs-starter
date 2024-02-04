import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorite }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavorite.length !== 0}/>
    </div>
  ) 
};

export default FavBadge;