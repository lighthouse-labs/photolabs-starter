import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => { 
  const { 
    state: { isModalOpen, selectedPhoto, favoritedPhotoIds, photoData, topicData, error, viewFavorites }, 
    setTopicSelected,
    updateToFavPhotoIds, 
    togglePhotoModal, 
    toggleFavoritesView
  } = useApplicationData();
  
  return (
    <div className="App">
       {/* Display the error if it exists */}
       {error && <div className="error-message">{error}</div>}
       
      <HomeRoute 
        photos={photoData} 
        topics={topicData}
        togglePhotoModal={togglePhotoModal} 
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavoritePhoto={updateToFavPhotoIds}
        topicSelect={setTopicSelected}
        viewFavorites={viewFavorites}
        toggleFavoritesView={toggleFavoritesView}
      />
      {isModalOpen &&
        <PhotoDetailsModal 
        photoData={selectedPhoto} 
        togglePhotoModal={togglePhotoModal}
        favoritedPhotoIds={favoritedPhotoIds}
        toggleFavoritePhoto={updateToFavPhotoIds}
        />}
    </div>
  );
};

export default App;
