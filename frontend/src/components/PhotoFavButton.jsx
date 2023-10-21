import React from 'react';

import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';
import useApplicationData from 'hooks/useApplicationData';

const PhotoFavButton = ({photo}) => {
  const { addFav, state, toggleFav } = useApplicationData();
  const handleFav = () => {
    const updateFav = [...state.favPhotos]; //create shallow copy
    const index = updateFav.indexOf(photo); //check if exists as a fav
    index !== -1 ? updateFav.splice(index, 1) : updateFav.push(photo)
    addFav(updateFav);
    toggleFav();
  };

  return (
    <div className={state.addFav ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon'} onClick={handleFav}>
      <FavBadge
        selected={state.addFav}s
      />
    </div>
  );
}

export default PhotoFavButton;