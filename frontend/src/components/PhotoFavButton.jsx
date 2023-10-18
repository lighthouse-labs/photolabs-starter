import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {id, favList, setFavList} = props

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    console.log('setFavList', setFavList)
    console.log('id', id)
    setLiked(true);

    let finalFavList = [];
    if (favList.includes(id)) {
      finalFavList = favList.filter(photo => photo !== id)
    } else {
      finalFavList = [...favList, id]
    }
    setFavList(finalFavList);

  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
        selected={liked}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;