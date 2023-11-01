import React from 'react';
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
  getTopicId,
  selectedTopic,
  darkTheme,
  themeToggler
}) => {
  return (
    <div className={darkTheme ? 'home-route dark' : 'home-route'}>
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        getTopicId={getTopicId}
        selectedTopic={selectedTopic}
        themeToggler={themeToggler}
        darkTheme={darkTheme}
      />
      <PhotoList
        photos={photos}
        toggleFavourites={toggleFavourites}
        openModal={openModal}
        favourites={favourites}
        setClickedPhoto={setClickedPhoto}
        darkTheme={darkTheme}
      />
    </div>
  );
};

export default HomeRoute;
