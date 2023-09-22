import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import topics from 'mocks/topics';

const HomeRoute = ({
  photos,
  favourites,
  selectedPhoto,
  selectedPhotoHandler,
  isFavourite,
  isFavPhotoExist,
  setModalHandler,
  
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist(favourites)} />
      <PhotoList
        photos={photos}
        selectedPhoto={selectedPhoto}
        selectedPhotoHandler={selectedPhotoHandler}
        isFavourite={isFavourite}
        setModalHandler={setModalHandler}
        
      />
    </div>
  );
};

export default HomeRoute;
