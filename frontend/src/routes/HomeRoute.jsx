import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import topics from 'mocks/topics';

const HomeRoute = ({
  photos,
  favourites,
  toggleFavourites,
  openModal,
	setClickedPhoto
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
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
