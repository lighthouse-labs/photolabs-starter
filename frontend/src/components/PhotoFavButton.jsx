import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import useApplicationData from 'hooks/useApplicationData';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {liked, setLiked, id, modalId, favList, setFavList, showModal } = props;

  //builds favList array
  const handleClick = () => {

    // console.log('PhotoFavButton props', props)
    console.log('PhotoFavButton {liked[id]}', liked[id])

    // console.log('PhotoFavButton liked', liked)
    // console.log('PhotoFavButton favList', favList)

    //toggles liked state of each photo
    setLiked(props.id)

    //builds favList array
    setFavList(id)
    
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