import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState(new Set());

  const addToFavorites = (photo) => {
    const updatedSet = new Set(favorites);
    updatedSet.add(photo);
    setFavorites(updatedSet);
  };

  const removeFromFavorites = (photo) => {
    const updatedSet = new Set(favorites);
    updatedSet.delete(photo);
    setFavorites(updatedSet);
  };

  const {topics, photos} = props;
  const isFavPhotoExist = favorites.size > 0 ? true : false;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} setFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} onClick={props.onClick}/>
    </div>
  );
};

export default HomeRoute;