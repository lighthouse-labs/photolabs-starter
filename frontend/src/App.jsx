import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      setPhotoSelected={setPhotoSelected}
      likedPhotos={state.likedPhotos}
      photos={photos}
      currentPhoto={state.currentPhoto}
      updateToFavPhotoIds={updateToFavPhotoIds}
      onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default App;
