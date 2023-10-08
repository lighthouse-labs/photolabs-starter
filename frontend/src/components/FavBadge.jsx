import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert,selected}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!displayAlert} selected={selected} />
    </div>
  ) 
};

export default FavBadge;
