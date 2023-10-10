import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [colorCheck, setColorCheck] = useState(props.favourites.includes(props.id));

  useEffect(() => {
    setColorCheck(props.favourites.includes(props.id));
  }, [props.favourites, props.id]);

  function handleClick() {
    props.toggleFavourite(props.id); 
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
