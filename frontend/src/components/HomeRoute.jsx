import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState(new Set());

  const addToFavorites = (photo) => {
    setFavorites(prev => new Set([...prev, photo]));
  }

  const removeFromFavorites = (photo) => {
    setFavorites(prev => new Set([...prev].filter(x => x !== photo)));
  }

  const {topics, photos} = props;
  const isFavPhotoExist = favorites.length > 0 ? true : false;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>
    </div>
  );
};

export default HomeRoute;