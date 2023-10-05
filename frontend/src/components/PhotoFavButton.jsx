import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  console.log("FavButton Props: ", props);

  const [localSelected, setLocalSelected] = useState('')

  function handleClick() {
    console.log('clicked');

    
    setLocalSelected((prev) => prev === '' ? 'liked' : '')

    localSelected === '' ? 
    props.setSelectedCount((prev) => prev + 1) : 
    props.setSelectedCount((prev) => prev - 1);
  }

  return (
    <div className="photo-list__fav-icon"  onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={localSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
