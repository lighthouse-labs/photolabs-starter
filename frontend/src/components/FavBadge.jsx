import React from 'react';

import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}
        fill={"#C80000"}
      />
    </div>
  ) 
};

export default FavBadge;