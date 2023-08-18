import React, { useState } from 'react';

// Styling
import './App.scss';

// Routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Mock Data
import photos from 'mocks/photos.js'
import topics from 'mocks/topics.js'


// Note: Rendering a single component to build components in isolation
const App = () => {

  
  const [favPhotos, setFavPhotos] = useState([]);

  const addFavourite = (photoID) => {
    if (!favPhotos.includes(photoID)) {
      setFavPhotos([...favPhotos, photoID]);
    }
  };

  const removeFavourite = (photoID) => {
    if (favPhotos.includes(photoID)) {
      setFavPhotos(favPhotos.filter((id) => id !== photoID));
    }
  };

  const [clickedPhoto, setClickedPhoto] = useState(null);

  const openModal = (photo) => {
    setClickedPhoto(photo)
  };

  const closeModal = () => {
    setClickedPhoto(null)
  };

  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        openModal={openModal}
        favPhotos={favPhotos}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
        />

      {clickedPhoto && 
        <PhotoDetailsModal 
          photos={photos} 
          favPhotos={favPhotos}
          favPhotosExist={favPhotos.length > 0}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
          photo={clickedPhoto} 
          closeModal={closeModal} 
        />}

    </div>
  );
};



export default App;
