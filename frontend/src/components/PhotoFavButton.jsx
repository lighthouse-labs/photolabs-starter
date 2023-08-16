import React, { useState } from 'react';

// Styling
import FavIcon from './FavIcon';

// Components
import '../styles/PhotoFavButton.scss';

// Hooks
import useIsFav from 'hooks/useIsFav'


function PhotoFavButton(props) {

  const { photoID, favPhotos, isAFavPhoto, addFavourite, removeFavourite } = props;

  // const [isFav, setIsFav] = useState(false);
  
  const handleFavClick = ()=> { 
    {isAFavPhoto === true ? removeFavourite(photoID) : addFavourite(photoID)}
  };




  //const {isFav, handleFavClick} = useIsFav();

  return (
    <div className="photo-list__fav-icon" onClick={ handleFavClick }>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={!!isAFavPhoto ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;