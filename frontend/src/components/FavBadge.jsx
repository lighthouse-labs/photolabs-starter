import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorite }) => {
  return (
    <div className='fav-badge'>
      {isFavorite.length > 0 ? <FavIcon displayAlert={isFavorite.length > 0} selected={true}/> :
       <FavIcon/>} 
    </div>
  ) 
};

export default FavBadge;