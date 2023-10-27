import React, { useCallback, useState, useEffect, useReducer } from 'react';

import FavIcon from './FavIcon';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { state, liked, setLiked, id, modalId, favList, setFavList, showModal } = props;

  const handleClick = () => {

    const photoId = props.id;

    //adds or removes photos from favList array of favourited photos
    props.dispatch({ type: 'UPDATE_FAV_LIST', payload: photoId })
    
    //toggles like and unlike of photos by photoId
    props.dispatch({ type: 'TOGGLE_PHOTO_LIKE', payload: photoId })

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