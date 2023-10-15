import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = (props) => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [selected, setSelected] = useState(false);
  const {setFavorites, removeFromFavorites, photoId} = props;

  const handleIconClick = () => {
    if (selected) {
      setSelected(false);
      removeFromFavorites(photoId);
    } else {
      setSelected(true);
      setFavorites(photoId);
    }
  };

  useEffect(() => {
    if(props.isFavPhotoExist) {
      setDisplayAlert(true);
    } else {
      setDisplayAlert(false);
    }
  }, [props.isFavPhotoExist])

  return (
    <div className="photo-list__fav-icon">
      {
        <FavIcon displayAlert= {displayAlert} selected={selected} onClick={handleIconClick}/>
      }
    </div>
  );
};

export default PhotoFavButton;