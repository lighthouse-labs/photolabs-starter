import React, { useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => { 
  const { 
    state: { isModalOpen, selectedPhoto, favoritedPhotoIds, photoData, topicData  }, 
    updateToFavPhotoIds, 
    setPhotoSelected, 
    onClosePhotoDetailsModal 
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute 
        photos={photoData} 
        topics={topicData}
        toggleModal={setPhotoSelected} 
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={updateToFavPhotoIds}
      />
      {isModalOpen &&
        <PhotoDetailsModal 
        photoData={selectedPhoto} 
        toggleModal={onClosePhotoDetailsModal}
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavorite={updateToFavPhotoIds}
        />}
    </div>
  );
};

export default App;
