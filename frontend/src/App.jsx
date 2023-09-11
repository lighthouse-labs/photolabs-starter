import React, { useState } from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
  return (
  <div className="App">
    {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} photos={photos} onClose={closeModal} />}
    <HomeRoute openModal={openModal} />
    

  </div>
  );
};

export default App; 
