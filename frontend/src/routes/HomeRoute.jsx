import React, { useState } from 'react';

// Styling
import "../styles/HomeRoute.scss";

// Components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const { photos, topics, openModal, favPhotos, addFavourite, removeFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
      />

      <PhotoList 
        photos={photos} 
        favPhotos={favPhotos}
        favPhotosExist={favPhotos.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
