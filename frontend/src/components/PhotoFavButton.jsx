import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`photo-list__fav-icon ${isLiked ? 'liked' : 'not-liked'}`}
      onClick={handleButtonClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected = {isLiked}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;