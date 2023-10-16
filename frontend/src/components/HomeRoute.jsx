import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState(new Set());
  const addToFavorites = (photo) => {
    setFavorites((prev) => {
      const updatedSet = new Set(prev);
      updatedSet.add(photo);
      return updatedSet;
    });
  };

  const removeFromFavorites = (photo) => {
    setFavorites((prev) => {
      const updatedSet = new Set(prev);
      updatedSet.delete(photo);
      return updatedSet;
    });
  };

  const {topics, photos} = props;
  const isFavPhotoExist = favorites.size > 0 ? true : false;
  const isPhotoFavorited = (photo) => {
    return favorites.has(photo);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} setFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} onClick={props.onClick} isPhotoFavorited={isPhotoFavorited}/>
    </div>
  );
};

export default HomeRoute;