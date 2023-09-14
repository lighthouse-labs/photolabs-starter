import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ displayAlert }) {
  // const [isClicked, setIsClicked] = useState(selected);

  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected(!selected);
  };

  console.log(selected);
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={clickHandler}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
