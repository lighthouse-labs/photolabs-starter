import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}
        width={20}
        height={17}
        outlineWidth={2}
        fill={"red"}
        stroke={"#C80000"}
      />
    </div>
  ) 
};

export default FavBadge;