import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { id, state, toggleFav } = props;
  
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFav(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={state.favPhotos.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;