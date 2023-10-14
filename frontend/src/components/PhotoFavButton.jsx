import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [selected, setSelected] = useState(false);
  const {setFavorites, photoId} = props;

  const handleIconClick = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
      setFavorites(photoId);
    }
  };

  return (
    <div className="photo-list__fav-icon">
      {
        <FavIcon displayAlert= {displayAlert} selected={selected} onClick={handleIconClick}/>
      }
    </div>
  );
};

export default PhotoFavButton;