import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  // const [isFav, setFav] = useState(false);
  // const favSwitch = () => setFav((isFav === false) ? true : false);

  const { id, favPhotos, setFavPhotos } = props;
  // favPhotos is array contain Photo ids

  const handleFavClick = () => {
    if (favPhotos.includes(id)) {
      // if the photo is already in favourite, remove === UnFavourite
      setFavPhotos(
        favPhotos.filter((favPhotoId) => favPhotoId !== id)
      );
    } else {
      // otherwise add into favourite
      setFavPhotos([...favPhotos, id]);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={favPhotos.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;