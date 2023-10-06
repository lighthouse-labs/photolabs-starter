import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
 import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({})
  console.log("Selected ID: ", selectedImage);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomeRoute setShowModal={setShowModal} setSelectedImage={setSelectedImage}/>} />
      </Routes>

      {showModal && <PhotoDetailsModal 
      setShowModal={setShowModal}
      id={selectedImage.id}
      full={selectedImage.full}
      regular={selectedImage.regular}
      name={selectedImage.name}
      location={selectedImage.location}
      profile={selectedImage.profile}
      favourites={selectedImage.favourites}
      toggleFavourite={selectedImage.toggleFavourite}
      similar_photos={selectedImage.similar_photos}
      
  
      />}
    </Router>
  );
}

export default App;
