import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';
import LikedPhotosView from 'components/LikedPhotosView';


const App = () => {
  const {
    state,
    openModal,
    closeModal,
    updateToFavPhotoIds,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
  <div className="App">
    {state.selectedPhoto && (
  <PhotoDetailsModal 
    photo={state.selectedPhoto} 
    photos={state.photoData} 
    onClose={closeModal}
    favoritedPhotos={state.favoritedPhotos} 
    updateToFavPhotoIds={updateToFavPhotoIds}
  />
)}
    <HomeRoute 
   openModal={openModal} 
   photos={state.photoData}
   topics={state.topicData}
   favoritedPhotos={state.favoritedPhotos}
   setFavoritedPhotos={updateToFavPhotoIds}
   updateToFavPhotoIds={updateToFavPhotoIds}
   fetchPhotosByTopic={fetchPhotosByTopic}
/> 

  </div>
  
  );
};

export default App; 
