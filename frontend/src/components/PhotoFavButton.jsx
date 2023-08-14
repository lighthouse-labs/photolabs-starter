import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFav, setIsFav] = useState(false);

  const handleFavClick = ()=> { 
    console.log(`set isFav as: ${!isFav}`);
    {isFav === true ? setIsFav(false) : setIsFav(true)}
  }

  return (
    <div className="photo-list__fav-icon" onClick={ handleFavClick }>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav === true ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;