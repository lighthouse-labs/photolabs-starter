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
        />

      {!!clickedPhoto ? 
        <PhotoDetailsModal 
          photo={clickedPhoto} 
          closeModal={closeModal} 
        /> 
        : null}

    </div>
  );
};



export default App;
