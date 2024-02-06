import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import { useApplicationData } from 'hooks/useApplicationData'


const App = () => {

  //Favorites and DisplayModal moved to Custom Hook useApplicationData

  //Importing useApplicationData custom hook
  const { favorite, toggleFavorite, displayModal, updateDisplayModal, photoData, topicData, handleTopicClick, photoByTopic } = useApplicationData();

  return (

    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        updateDisplayModal={updateDisplayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        handleTopicClick={handleTopicClick}
        photoByTopic={photoByTopic} />

      {displayModal && <PhotoDetailsModal
        updateDisplayModal={updateDisplayModal}
        displayModal={displayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
