import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//The original code is here
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};


export default FavBadge;