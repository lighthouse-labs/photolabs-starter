import React from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    state,
    isModalOpen,
    selectedPhoto,

    openModal,
    closeModal,
    updateToFavPhotoIds
  } = useApplicationData();

  return (
  <div className="App">
    {state.selectedPhoto && (
  <PhotoDetailsModal 
    photo={state.selectedPhoto} 
    photos={photos} 
    onClose={closeModal}
    favoritedPhotos={state.favoritedPhotos} 
    updateToFavPhotoIds={updateToFavPhotoIds}
  />
)}
    <HomeRoute 
   openModal={openModal} 
   favoritedPhotos={state.favoritedPhotos}
   setFavoritedPhotos={updateToFavPhotoIds}
   updateToFavPhotoIds={updateToFavPhotoIds}
/> 

  </div>
  
  );
};

export default App; 
