import React, { useState } from 'react';

// Styling
import "../styles/HomeRoute.scss";

// Components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const { handleAllClick, handleTopicClick, isFav, handleFavClick, photos, topics, openModal, handlePhotoClick, favPhotos, addFavourite, removeFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
        handleTopicClick={handleTopicClick}
        handleAllClick={handleAllClick}
      />

      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
        handlePhotoClick={handlePhotoClick}
        isFav={isFav}
        handleFavClick={handleFavClick}
      />
    </div>
  );
};

export default HomeRoute;
