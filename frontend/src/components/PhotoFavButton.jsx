import React, { useState } from 'react';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ displayAlert }) => {
  const [Favorite, setFavorite] = useState(false);

  const handleIconClick = () => {
    setFavorite(!Favorite);
    console.log('Favorite button clicked!');
  };

  return (
    <div className="photo-list__fav-icon fav-position">
      <div className="photo-list__fav-icon-svg"><FavIcon selected={Favorite} displayAlert={displayAlert} handleIconClick={handleIconClick} /></div>
    </div>
  );
};

export default PhotoFavButton;
