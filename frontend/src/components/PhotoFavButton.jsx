import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { id, state, toggleFav } = props;
  // favPhotos is array contain Photo ids

  // const handleFavClick = () => {
  //   if (favPhotos.includes(id)) {
  //     // if the photo is already in favourite, remove === UnFavourite
  //     setFavPhotos(
  //       favPhotos.filter((favPhotoId) => favPhotoId !== id)
  //     );
  //   } else {
  //     // otherwise add into favourite
  //     setFavPhotos([...favPhotos, id]);
  //   }
  // };
  console.log(state);

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFav(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFav={state.favPhotos.includes(id)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;