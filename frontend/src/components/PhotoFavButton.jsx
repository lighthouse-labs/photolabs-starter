import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    setFav(!fav)
  }

  return (
    <div onClick= {handleClick}className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected ={fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;