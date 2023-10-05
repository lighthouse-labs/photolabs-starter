import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  console.log("isFavPhotoExist: ", isFavPhotoExist);
  const Count = () => {
    return(
      <div className='count'>
        {isFavPhotoExist}
      </div>
      
    );
  } 
  return (
    <div className='fav-badge'>
      {(isFavPhotoExist === 0) && <FavIcon displayAlert={!!isFavPhotoExist}/>}
      {(isFavPhotoExist > 0) && <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>}
    </div>
  ) 
};

export default FavBadge;