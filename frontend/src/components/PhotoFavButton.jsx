import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {liked, setLiked, id, modalId, favList, setFavList, showModal } = props;

  //builds favList array
  const handleClick = () => {

    // const currentId = modalId ? modalId : id;
    console.log('PhotoFavButton liked', liked)
    console.log('PhotoFavButton showModal',  showModal)

    //to toggle liked state of each photo
    // function handleFavouriteClick(photoId) {
      setLiked((current) => {
        const copy = { ...current };
        copy[id] = !copy[id];
        console.log('PhotoFavButton copy', copy)
        return copy;
      });
    // }
    // handleFavouriteClick(id)
    console.log('PhotoFavButton liked333', liked)

    let finalFavList = [];

    console.log("modal", modalId)

    if (favList.includes(id)) {
      finalFavList = favList.filter(photo => photo !== id)
    } else {
      finalFavList = [...favList, id]
    }
    setFavList(finalFavList);

  }
  console.log('PhotoFavButton liked32313', liked)
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        selected={liked && liked[id]}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;