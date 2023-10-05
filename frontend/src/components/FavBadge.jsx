import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert,selected}) => {
  //const selected = isFavPhotoExist; // Set the 'selected' prop based on whether there are liked photos
  console.log('dis',!!displayAlert)
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!displayAlert} selected={selected} />
    </div>
  ) 
};

export default FavBadge;
