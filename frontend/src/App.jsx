import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosByTopics
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setPhotoSelected={setPhotoSelected}
        likedPhotos={state.likedPhotos}
        topicData={state.topicData}
        photos={state.photoData}
        currentPhoto={state.currentPhoto}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        getPhotosByTopics={getPhotosByTopics}
      />
    </div>
  );
};

export default App;