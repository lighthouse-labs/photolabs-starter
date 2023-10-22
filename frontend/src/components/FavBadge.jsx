import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ selected, displayAlert }) => {

  return (
    <div className='fav-badge'>
      <FavIcon selected={selected} displayAlert={displayAlert}/>
    </div>
  ) 
};

export default FavBadge;