import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // console.log('liked')
    setLiked(true);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        selected={liked}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;