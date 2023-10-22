import React, { useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

const PhotoFavButton = ({ photo, state }) => {
  const favPic = state.favPhotos;
  const [isFav, setIsFav] = useState(false); //local state to track if fav

  const handleFav = () => {
    const findPic = favPic.findIndex((favPhoto) => favPhoto.id === photo.id); // search favpic.id for photo.id
    if (findPic !== -1) {
      favPic.splice(findPic, 1) // if photo.id exists in favpic then splice
    } else {
      favPic.push(photo);
    };
    setIsFav((prev) => !prev);
  };

  return (
    <div className={isFav ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon'} onClick={handleFav}>
      < FavBadge selected={isFav} displayAlert={false} />
    </div>
  );
}

export default PhotoFavButton;