import React from 'react';

// Styling
import FavIcon from './FavIcon';

// Components
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = (props) => {

  const { photoID, isAFavPhoto, addFavourite, removeFavourite } = props;

  const handleFavClick = ()=> {
    isAFavPhoto === true ? removeFavourite(photoID) : addFavourite(photoID);
  };

  return (
    <div className="photo-list__fav-icon" onClick={ handleFavClick }>
      <div className="photo-list__fav-icon-svg">

        <FavIcon fill={isAFavPhoto ? "#C80000" : "#EEEEEE"} />
        
      </div>
    </div>
  );
};


export default PhotoFavButton;