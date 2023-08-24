import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist,setSidePeekForLikedPhotos }) => {
  return (
    <div className='fav-badge' onClick={() => {
      console.log(77)
      setSidePeekForLikedPhotos(true)
    }}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} setSidePeekForLikedPhotos={setSidePeekForLikedPhotos}/>
    </div>
  ) 
};

export default FavBadge;