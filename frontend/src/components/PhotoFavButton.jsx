import React from "react";

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { dispatch, liked, id } = props;

  const handleClick = () => {

    const photoId = props.id;

    //adds or removes photos from favList array of favourited photos
    dispatch({ type: 'UPDATE_FAV_LIST', payload: photoId });
    
    //toggles like and unlike status of photos by photoId
    dispatch({ type: 'TOGGLE_PHOTO_LIKE', payload: photoId });

  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        selected={liked[id]}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;