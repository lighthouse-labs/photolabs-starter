import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [selected, setSelected] = useState(false);
  const {setFavorites, removeFromFavorites, isFavPhotoExist, photoId, isPhotoFavorited} = props;
  const handleIconClick = () => {
    if (selected) {
      removeFromFavorites(photoId);
      setSelected(false);
    } else {
      setFavorites(photoId);
      setSelected(true);
    }
  };
  useEffect(() => {
    if (isFavPhotoExist) {
      setDisplayAlert(true);
    } else {
      setDisplayAlert(false);
    }
    //TODO: fix error with modal photo not changing icon at the same time (move scope up a level?)
    if (isPhotoFavorited(photoId)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [isFavPhotoExist, isPhotoFavorited(photoId)]);

  return (
    <div className="photo-list__fav-icon">
      {
        <FavIcon displayAlert= {displayAlert} selected={selected} onClick={handleIconClick}/>
      }
    </div>
  );
};

export default PhotoFavButton;