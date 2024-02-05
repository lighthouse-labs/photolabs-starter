import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import { useApplicationData } from 'hooks/useApplicationData'


const App = () => {

  //Favorites and DisplayModal moved to Custom Hook useApplicationData

  //Importing useApplicationData custom hook
  const { favorite, toggleFavorite, displayModal, updateDisplayModal } = useApplicationData();

  return (

    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        updateDisplayModal={updateDisplayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} />

      {displayModal && <PhotoDetailsModal
        updateDisplayModal={updateDisplayModal}
        displayModal={displayModal}
        favorite={favorite}
        toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
