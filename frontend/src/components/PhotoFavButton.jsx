import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favourite, setFavourite] = useState(false)

  const handleFavourite = () => {
    setFavourite(!favourite)
  }
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={handleFavourite} selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;