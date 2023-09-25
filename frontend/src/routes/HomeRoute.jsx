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
  selectedTopic
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        getTopicId={getTopicId}
        selectedTopic={selectedTopic}
      />
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
