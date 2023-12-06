import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { isLiked, toggleLike } = props;

  return (
    <div className='photo-list__fav-icon'>
      <div className="photo-list__fav-icon-svg" onClick={toggleLike}>
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;