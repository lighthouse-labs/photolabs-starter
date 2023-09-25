import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  photos,
  favourites,
  toggleFavourites,
  openModal,
  setClickedPhoto,
  topics,
  getTopicId
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} getTopicId={getTopicId} />
      <PhotoList
        photos={photos}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
        favourites={favourites}
        setClickedPhoto={setClickedPhoto}
      />
    </div>
  );
};

export default HomeRoute;
