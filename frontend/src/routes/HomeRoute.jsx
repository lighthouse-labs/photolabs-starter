import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favourites, setFavourites] = useState([]);

const toggleFavourite = function(id) {
  if (favourites.includes(id)) {
    setFavourites(prevFavourites => prevFavourites.filter(favId => favId !== id));
  } else {
    setFavourites(prevFavourites => [...prevFavourites, id]);
  }
};

function isFavPhotoExist() {
  if (favourites.length === 0) {
    return false;
  } else {
    return true;
  }
}

  
  return (
    <div className="home-route">
      <div className='top-nav-bar'>
        <TopNavigation />
        <TopicList/>
        <FavBadge isFavPhotoExist={isFavPhotoExist()}/>
      </div>
      <PhotoList favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default HomeRoute;
