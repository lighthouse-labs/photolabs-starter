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
          width={20}
          height={20}
          fill={liked ? "red" : ""}
          outlineWidth={1}
          stroke={liked ? "" : "red"} 
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;