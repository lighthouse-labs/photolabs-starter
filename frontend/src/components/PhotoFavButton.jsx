import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    setIsFav(!isFav)
  };

  return (
    <div className={`photo-list__fav-icon ${isFav ? 'photo-list__fav-icon-svg' : ''}`} onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={FavIcon}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;