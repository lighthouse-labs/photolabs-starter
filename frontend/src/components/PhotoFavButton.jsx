import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [isFav, setFav] = useState(false);
  const favSwitch = () => setFav((isFav === false) ? true : false);

  return (
    <div className="photo-list__fav-icon" onClick={favSwitch}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={isFav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;