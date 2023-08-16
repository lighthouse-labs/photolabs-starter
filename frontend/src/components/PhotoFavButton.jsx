import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isClicked, setIsClicked] = useState(false)
  
  const handleButtonClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isClicked}/>
      </div>
    </div>
  );  
}

export default PhotoFavButton;