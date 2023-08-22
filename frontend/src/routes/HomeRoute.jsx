import React from 'react';

// Styling
import "../styles/HomeRoute.scss";

// Components
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const { handleShowFavsClick, handleAllClick, handleTopicClick, photos, topics, openModal, handlePhotoClick, favPhotosArray, addFavourite, removeFavourite } = props;

  return (
    <div className="home-route">

      <TopNavigationBar
        topics={topics}
        favPhotosArray={favPhotosArray}
        favPhotosExist={favPhotosArray.length > 0}
        handleTopicClick={handleTopicClick}
        handleAllClick={handleAllClick}
        handleShowFavsClick={handleShowFavsClick}
      />

      <PhotoList
        photos={photos}
        favPhotosArray={favPhotosArray}
        favPhotosExist={favPhotosArray.length > 0}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        openModal={openModal}
        handlePhotoClick={handlePhotoClick}
      />
      
    </div>
  );
};

export default HomeRoute;
