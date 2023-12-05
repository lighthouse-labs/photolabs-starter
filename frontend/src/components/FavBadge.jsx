import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, notifications }) => {

const notification = () => {

  if (notifications.length > 0) {
    return true;
  } 

  return false;
}

  return (
    <div className='fav-badge'>
      <FavIcon selected={notification()} displayAlert={notification()}/>
    </div>
  ) 
};

export default FavBadge;